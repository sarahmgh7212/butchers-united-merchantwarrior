import { Prisma } from '@prisma/client';
import { ModelMiddleware } from '../types';

export class ModelSoftDeleteMiddleware implements ModelMiddleware {
  private _pDelegate: any;

  constructor(prismaDelegate: any) {
    this._pDelegate = prismaDelegate;
  }

  public async findMany(params: Prisma.MiddlewareParams): Promise<void> {
    params.args.where = this.getWhere(params.args.where);
  }

  async findFirst(params: Prisma.MiddlewareParams): Promise<void> {
    params.args.where = this.getWhere(params.args.where);
  }

  async findUnique(params: Prisma.MiddlewareParams): Promise<void> {
    params.args.where = this.getWhere(params.args.where);
    params.action = 'findFirst';
  }

  async count(params: Prisma.MiddlewareParams): Promise<void> {
    params.args.where = this.getWhere(params.args.where);
  }

  async update(params: Prisma.MiddlewareParams): Promise<void> {
    const existCount = await this._pDelegate.count({
      where: this.getWhere(params.args.where),
    });

    if (!existCount) {
      throw new Error('Not Found');
    }
  }

  async updateMany(params: Prisma.MiddlewareParams): Promise<void> {
    params.args.where = this.getWhere(params.args.where);
  }

  async delete(params: Prisma.MiddlewareParams): Promise<void> {
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
  }

  async deleteMany(params: Prisma.MiddlewareParams): Promise<void> {
    if (!params.args.where?._destroy) {
      params.args.where = this.getWhere(params.args.where);
      params.args.data = {};
      params.args.data.deletedAt = new Date();
      params.action = 'updateMany';
    }
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
