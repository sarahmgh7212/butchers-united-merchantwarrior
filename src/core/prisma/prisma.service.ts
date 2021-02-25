import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { getAllFunctions } from 'src/libs/helpers/get-all-functions';
import { isClass } from 'src/libs/helpers/is-class';
import { AVAIABLE_MIDDLEWARE_ACTIONS } from './prisma.constants';
import { ModelMiddleware, ModelMiddlewareMap } from './prisma.types';
import * as camelCase from 'camelcase';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {
  modelMiddlewares: ModelMiddlewareMap = {};

  async onModuleInit() {
    await this.$connect();

    this.$use(async (params, next) => {
      const { action } = params;
      const model = camelCase(params.model);

      if (
        !Object.prototype.hasOwnProperty.call(this.modelMiddlewares, model) ||
        !this.modelMiddlewares[model][action].length
      ) {
        return next(params);
      }

      const mws = this.modelMiddlewares[model][action] || [];

      let nextFn = next;

      for (let i = mws.length - 1; i >= 0; i--) {
        const nextRef = nextFn;
        nextFn = (p) => mws[i](p, nextRef);
      }

      return nextFn(params);
    });
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  registerModelMiddleware(modelName: string, middleware: ModelMiddleware) {
    const actions = getAllFunctions(middleware).filter((a) =>
      AVAIABLE_MIDDLEWARE_ACTIONS.includes(a),
    );

    const parsedModelName = camelCase(modelName);

    for (let i = 0; i < actions.length; i++) {
      const fn = actions[i];
      const mwFn = middleware[fn];

      if (
        !Object.prototype.hasOwnProperty.call(
          this.modelMiddlewares,
          parsedModelName,
        )
      ) {
        this.modelMiddlewares[parsedModelName] = {};
      }

      if (
        !Object.prototype.hasOwnProperty.call(
          this.modelMiddlewares[parsedModelName],
          fn,
        )
      ) {
        this.modelMiddlewares[parsedModelName][fn] = [mwFn.bind(middleware)];
      } else {
        this.modelMiddlewares[parsedModelName][fn].push(mwFn.bind(middleware));
      }
    }
  }
}
