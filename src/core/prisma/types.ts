import { Prisma } from '@prisma/client';

export interface ModelMiddleware {
  findMany?: (params: Prisma.MiddlewareParams) => Promise<void>;
  findFirst?: (params: Prisma.MiddlewareParams) => Promise<void>;
  findUnique?: (params: Prisma.MiddlewareParams) => Promise<void>;
  create?: (params: Prisma.MiddlewareParams) => Promise<void>;
  update?: (params: Prisma.MiddlewareParams) => Promise<void>;
  updateMany?: (params: Prisma.MiddlewareParams) => Promise<void>;
  delete?: (params: Prisma.MiddlewareParams) => Promise<void>;
  deleteMany?: (params: Prisma.MiddlewareParams) => Promise<void>;
}

export interface MiddlewareActions {
  findMany?: [(params: Prisma.MiddlewareParams) => Promise<void>];
  findFirst?: [(params: Prisma.MiddlewareParams) => Promise<void>];
  findUnique?: [(params: Prisma.MiddlewareParams) => Promise<void>];
  create?: [(params: Prisma.MiddlewareParams) => Promise<void>];
  update?: [(params: Prisma.MiddlewareParams) => Promise<void>];
  updateMany?: [(params: Prisma.MiddlewareParams) => Promise<void>];
  delete?: [(params: Prisma.MiddlewareParams) => Promise<void>];
  deleteMany?: [(params: Prisma.MiddlewareParams) => Promise<void>];
}

export interface ModelMiddlewareMap {
  [key: string]: MiddlewareActions;
}
