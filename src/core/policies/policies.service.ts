import {
  DiscoveredClassWithMeta,
  DiscoveryService,
} from '@golevelup/nestjs-discovery';
import {
  Injectable,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { isFunction } from 'src/libs/helpers/is-function';
import { AuthService } from '../auth/auth.service';
import { PrismaService } from '../prisma/prisma.service';
import { ModelMiddleware } from '../prisma/prisma.types';
import { POLICY_MODEL_NAME } from './policies.constants';
import { Policy, PolicyWrappedModelService } from './policies.types';

@Injectable()
export class PoliciesService implements OnModuleInit {
  constructor(
    private readonly discover: DiscoveryService,
    private readonly authService: AuthService,
    private readonly prisma: PrismaService,
  ) {}

  async onModuleInit() {
    const providers = await this.discover.providersWithMetaAtKey<Policy<any>>(
      POLICY_MODEL_NAME,
    );

    providers.forEach(this.registerPolicy);

    // console.log(Object.keys(this.policyMap));
  }

  registerPolicy(policyClass: any, model: string) {
    const policy = new policyClass() as Policy<any>;

    const modelMiddleware: ModelMiddleware = {};
    const authService = this.authService;
    const prisma = this.prisma;

    if (isFunction(policy.list)) {
      modelMiddleware.count = (params, next) => {
        if (!policy.list(authService.authedUser)) {
          throw new UnauthorizedException();
        }

        return next(params);
      };

      modelMiddleware.findMany = (params, next) => {
        if (!policy.list(authService.authedUser)) {
          throw new UnauthorizedException();
        }

        return next(params);
      };
    }

    if (isFunction(policy.view)) {
      const oneFunction = async (params, next) => {
        const rec = await next(params);

        if (rec && !policy.view(authService.authedUser, rec)) {
          throw new UnauthorizedException();
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
          throw new UnauthorizedException();
        }

        return next(params);
      };
    }

    if (isFunction(policy.update)) {
      modelMiddleware.update = async (params, next) => {
        const rec = await prisma[model].findFirst({ where: params.args.where });

        if (policy.update(authService.authedUser, rec)) {
          throw new UnauthorizedException();
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
          throw new UnauthorizedException();
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
          throw new UnauthorizedException();
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
  }

  registerPolicy(provider: DiscoveredClassWithMeta<Policy<any>>) {
    // @ts-expect-error TODO: REMOVE
    const policy = new provider.meta() as Policy<any>;
    const modelService = provider.discoveredClass
      .instance as PolicyWrappedModelService;

    modelService.wrappedServices[policy.constructor.name] = {};
    const wrapper = modelService.wrappedServices[policy.constructor.name];

    const authService = this.authService;

    if (
      isFunction(modelService.findMany) &&
      (isFunction(policy.list) || isFunction(policy.view))
    ) {
      wrapper.findMany = modelService.findMany;

      const listFn = isFunction(policy.list) ? policy.list : () => true;

      modelService.findMany = (async (args) => {
        if (!listFn(authService.authedUser)) {
          throw new UnauthorizedException();
        }

        const res = await wrapper.findMany(args);

        // CHRIS SHOULD THIS BE A SOME OR A FILTER?

        return res;
      }).bind(modelService);
    }

    if (isFunction(modelService.count) && isFunction(policy.list)) {
      wrapper.count = modelService.count;

      modelService.count = async (args) => {};
    }

    if (isFunction(modelService.findFirst) && isFunction(policy.view)) {
      wrapper.findFirst = modelService.findFirst;

      modelService.findFirst = (async (args) => {
        const res = await wrapper.findFirst(args);

        if (!policy.view(user, res)) {
          throw new UnauthorizedException(); // OR NOT FOUND?
        }

        return res;
      }).bind(modelService);
    }

    if (isFunction(modelService.findUnique) && isFunction(policy.view)) {
      wrapper.findUnique = modelService.findUnique;

      modelService.findUnique = (async (args) => {
        const res = await wrapper.findUnique(args);

        if (!policy.view(user, res)) {
          throw new UnauthorizedException(); // OR NOT FOUND?
        }

        return res;
      }).bind(modelService);
    }

    if (isFunction(modelService.create) && isFunction(policy.create)) {
      wrapper.create = modelService.create;

      modelService.create = (async (args) => {
        if (!policy.create(user)) {
          throw new UnauthorizedException();
        }

        return wrapper.create(args);
      }).bind(modelService);
    }

    if (isFunction(modelService.update)) {
      wrapper.update = modelService.update;

      modelService.update = (async (args) => {}).bind(modelService);
    }

    if (isFunction(modelService.updateMany)) {
      wrapper.updateMany = modelService.updateMany;

      modelService.updateMany = (async (args) => {}).bind(modelService);
    }

    if (isFunction(modelService.delete)) {
      wrapper.delete = modelService.delete;

      modelService.delete = (async (args) => {}).bind(modelService);
    }

    if (isFunction(modelService.deleteMany)) {
      wrapper.deleteMany = modelService.deleteMany;

      modelService.deleteMany = (async (args) => {}).bind(modelService);
    }
  }
}
