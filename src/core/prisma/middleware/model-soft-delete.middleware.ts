import { Prisma } from '@prisma/client';
import { ModelMiddleware, PrismaNextMiddleware } from '../prisma.types';

export class ModelSoftDeleteMiddleware implements ModelMiddleware {
  private _pDelegate: any;

  constructor(prismaDelegate: any) {
    this._pDelegate = prismaDelegate;
  }

  async findMany(
    params: Prisma.MiddlewareParams,
    next: PrismaNextMiddleware,
  ): Promise<void> {
    params.args.where = this.getWhere(params.args.where);

    return next(params);
  }

  async findFirst(
    params: Prisma.MiddlewareParams,
    next: PrismaNextMiddleware,
  ): Promise<void> {
    params.args.where = this.getWhere(params.args.where);

    return next(params);
  }

  async findUnique(
    params: Prisma.MiddlewareParams,
    next: PrismaNextMiddleware,
  ): Promise<void> {
    params.args.where = this.getWhere(params.args.where);
    params.action = 'findFirst';

    return next(params);
  }

  async count(
    params: Prisma.MiddlewareParams,
    next: PrismaNextMiddleware,
  ): Promise<void> {
    params.args.where = this.getWhere(params.args.where);

    return next(params);
  }

  async update(
    params: Prisma.MiddlewareParams,
    next: PrismaNextMiddleware,
  ): Promise<void> {
    const existCount = await this._pDelegate.count({
      where: this.getWhere(params.args.where),
    });

    if (!existCount) {
      throw new Error('Not Found');
    }

    return next(params);
  }

  async updateMany(
    params: Prisma.MiddlewareParams,
    next: PrismaNextMiddleware,
  ): Promise<void> {
    params.args.where = this.getWhere(params.args.where);

    return next(params);
  }

  async delete(
    params: Prisma.MiddlewareParams,
    next: PrismaNextMiddleware,
  ): Promise<void> {
    if (!params.args.where?._destroy) {
      const existCount = await this._pDelegate.count({
        where: this.getWhere(params.args.where),
      });

      if (!existCount) {
        throw new Error('Not Found');
      }

      params.args.data = {};
      params.args.data.deletedAt = new Date();
      params.action = 'update';
    }

    return next(params);
  }

  async deleteMany(
    params: Prisma.MiddlewareParams,
    next: PrismaNextMiddleware,
  ): Promise<void> {
    if (!params.args.where?._destroy) {
      params.args.where = this.getWhere(params.args.where);
      params.args.data = {};
      params.args.data.deletedAt = new Date();
      params.action = 'updateMany';
    }

    return next(params);
  }

  getWhere(inputWhere: { [key: string]: any }) {
    const where = { ...inputWhere };

    if (!where._withTrashed) {
      if (where.AND) {
        if (!Array.isArray(where.AND)) {
          where.AND = [where.AND];
        }
        where.AND = [...where.AND, { deletedAt: { equals: null } }];
      } else {
        where.AND = [{ deletedAt: { equals: null } }];
      }
    }

    return where;
  }
}
