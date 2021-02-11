import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ModelMiddleware, ModelMiddlewareMap } from './types';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {
  modelMiddlewares: ModelMiddlewareMap = {};

  async onModuleInit() {
    await this.$connect();

    this.$use(async (params, next) => {
      const { action } = params;
      const model = params.model.toLowerCase();

      if (!Object.prototype.hasOwnProperty.call(this.modelMiddlewares, model)) {
        return next(params);
      }

      const mws = this.modelMiddlewares[model][action] || [];

      for (let i = 0; i < mws.length; i++) {
        await mws[i](params);
      }

      return next(params);
    });
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  registerModelMiddleware(modelName: string, middleware: ModelMiddleware) {
    const actions = Object.getOwnPropertyNames(
      Object.getPrototypeOf(middleware),
    ).filter((a) => a !== 'constructor');

    for (let i = 0; i < actions.length; i++) {
      const fn = actions[i];
      const mwFn = middleware[fn];

      if (
        !Object.prototype.hasOwnProperty.call(this.modelMiddlewares, modelName)
      ) {
        this.modelMiddlewares[modelName] = {};
      }

      if (
        !Object.prototype.hasOwnProperty.call(
          this.modelMiddlewares[modelName],
          fn,
        )
      ) {
        this.modelMiddlewares[modelName][fn] = [mwFn.bind(middleware)];
      } else {
        this.modelMiddlewares[modelName][fn].push(mwFn.bind(middleware));
      }
    }
  }
}
