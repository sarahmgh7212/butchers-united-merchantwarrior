import { DiscoveryService } from '@golevelup/nestjs-discovery';
import { Injectable, OnModuleInit, Scope } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { isFunction } from 'src/libs/helpers/is-function';
import { AuthService } from '../auth/auth.service';
import { PrismaService } from '../prisma/prisma.service';
import { ModelMiddleware } from '../prisma/prisma.types';
import { POLICY_MODEL_NAME } from './policies.constants';
import { PolicyActions, PolicyConstructor, PolicyMap } from './policies.types';
import { Policy } from './policy';

@Injectable()
export class PoliciesService implements OnModuleInit {
  private readonly _policyMap: PolicyMap;

  constructor(
    private readonly discover: DiscoveryService,
    private readonly prisma: PrismaService,
    private readonly logger: PinoLogger,
    private readonly authService: AuthService,
  ) {
    this._policyMap = {};
    this.logger.setContext(PoliciesService.name);
  }

  get policyMap() {
    return this._policyMap;
  }

  async onModuleInit() {
    this.logger.debug('Starting policy provider search');

    const providers = await this.discover.providersWithMetaAtKey<string>(
      POLICY_MODEL_NAME,
    );

    providers.forEach((p) =>
      this.registerPolicy(
        p.discoveredClass.dependencyType as PolicyConstructor<any>,
        p.meta,
      ),
    );

    this.logger.debug('Auto policy registration complete', {
      _policyMap: this._policyMap,
    });
  }

  registerPolicy<T>(policyClass: PolicyConstructor<T>, model: string) {
    const policy = new policyClass() as Policy<any>;

    const modelMiddleware: ModelMiddleware = {};
    const authService = this.authService;

    const prisma = this.prisma;

    if (isFunction(policy.list)) {
      modelMiddleware.count = (params, next) => {
        if (!policy.list(authService.authedUser)) {
          throw new policy.options.cannotException();
        }

        return next(params);
      };

      modelMiddleware.findMany = (params, next) => {
        if (!policy.list(authService.authedUser)) {
          throw new policy.options.cannotException();
        }

        return next(params);
      };
    }

    if (isFunction(policy.view)) {
      const oneFunction = async (params, next) => {
        const rec = await next(params);

        if (rec && !policy.view(authService.authedUser, rec)) {
          throw new policy.options.cannotException();
        }

        return rec;
      };

      modelMiddleware.findFirst = oneFunction;
      modelMiddleware.findUnique = oneFunction;

      if (modelMiddleware.findMany) {
        modelMiddleware.findMany = async (params, next) => {
          const recs = await modelMiddleware.findMany(params, next);

          return recs.filter((r) => policy.view(authService.authedUser, r));
        };
      } else {
        modelMiddleware.findMany = async (params, next) => {
          const recs = await next(params);

          return recs.filter((r) => policy.view(authService.authedUser, r));
        };
      }
    }

    if (isFunction(policy.create)) {
      modelMiddleware.create = (params, next) => {
        if (!policy.create(authService.authedUser)) {
          throw new policy.options.cannotException();
        }

        return next(params);
      };
    }

    if (isFunction(policy.update)) {
      modelMiddleware.update = async (params, next) => {
        const rec = await prisma[model].findFirst({ where: params.args.where });

        if (policy.update(authService.authedUser, rec)) {
          throw new policy.options.cannotException();
        }

        return next(params);
      };

      modelMiddleware.updateMany = async (params, next) => {
        const recs = await prisma[model].findMany({ where: params.args.where });

        const ids = recs
          .filter((r) => policy.update(authService.authedUser, r))
          .map((r) => r.id);

        params.args.where = { id: { in: ids } };

        return next(params);
      };
    }

    let deleteOneFunc = (params, next) => next(params);
    let deleteManyFunc = (params, next) => next(params);
    let destroyOneFunc = (params, next) => next(params);
    let destroyManyFunc = (params, next) => next(params);
    let deletionUsed = false;

    if (isFunction(policy.delete)) {
      deleteOneFunc = async (params, next) => {
        const rec = await prisma[model].findFirst({ where: params.args.where });

        if (policy.delete(authService.authedUser, rec)) {
          throw new policy.options.cannotException();
        }

        return next(params);
      };

      deleteManyFunc = async (params, next) => {
        const recs = await prisma[model].findMany({ where: params.args.where });

        const ids = recs
          .filter((r) => policy.delete(authService.authedUser, r))
          .map((r) => r.id);

        params.args.where = { id: { in: ids } };

        return next(params);
      };

      deletionUsed = true;
    }

    if (isFunction(policy.destroy)) {
      destroyOneFunc = async (params, next) => {
        const rec = await prisma[model].findFirst({ where: params.args.where });

        if (policy.destroy(authService.authedUser, rec)) {
          throw new policy.options.cannotException();
        }

        return next(params);
      };

      destroyManyFunc = async (params, next) => {
        const recs = await prisma[model].findMany({ where: params.args.where });

        const ids = recs
          .filter((r) => policy.destroy(authService.authedUser, r))
          .map((r) => r.id);

        params.args.where = { id: { in: ids } };

        return next(params);
      };

      deletionUsed = true;
    }

    if (deletionUsed) {
      modelMiddleware.delete = async (params, next) => {
        if (params.args.where._destroy) {
          return destroyOneFunc(params, next);
        } else {
          return deleteOneFunc(params, next);
        }
      };

      modelMiddleware.deleteMany = async (params, next) => {
        if (params.args.where._destroy) {
          return destroyManyFunc(params, next);
        } else {
          return deleteManyFunc(params, next);
        }
      };
    }

    this.prisma.registerModelMiddleware(model, modelMiddleware);
    this._policyMap[model] = policy;
  }

  canUser<T>(action: PolicyActions, modelName: string, model?: T) {
    if (['view', 'update', 'delete', 'destroy'].includes(action) && !model) {
      throw new Error(`Must pass a model instance for action '${action}'`);
    }
    return this._policyMap[modelName][action](
      this.authService.authedUser,
      model,
    );
  }
}
