import { Prisma } from '@prisma/client';
import { GenericObject } from 'src/types';

export interface BaseOneArgs {
  where: Omit<GenericObject, 'OR' | 'AND' | 'NOT'>;
}

export interface BaseManyArgs {
  select?: GenericObject;
  include?: GenericObject;
  where?: GenericObject;
  orderBy?: GenericObject;
  cursor?: GenericObject;
  take?: number;
  skip?: number;
  distinct?: string[] | string;
}

export type FindUniqueArgs = BaseOneArgs;

export type FindFirstArgs = BaseManyArgs;

export type FindManyArgs = BaseManyArgs;

export interface CreateArgs {
  data: GenericObject;
}

export interface UpdateArgs extends BaseOneArgs {
  data: GenericObject;
}

export interface UpdateManyArgs extends BaseManyArgs {
  data: GenericObject;
}

export type DeleteArgs = BaseOneArgs;

export type DeleteManyArgs = BaseManyArgs;

export interface PrismaEntityService {
  findMany(args?: any): Promise<any[]>;
  findFirst(args?: any): Promise<any>;
  findUnique(args?: any): Promise<any>;
  count(args?: any): Promise<number>;
  create(args: any): Promise<any>;
  update(args: any): Promise<any>;
  updateMany(args: any): Promise<Prisma.BatchPayload>;
  delete(args: any): Promise<any>;
  deleteMany(args: any): Promise<Prisma.BatchPayload>;
}
