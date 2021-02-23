import { Prisma } from '@prisma/client';

export type PrismaNextMiddleware = (
  params: Prisma.MiddlewareParams,
) => Promise<any>;

export interface ModelMiddleware {
  findMany?: (
    params: Prisma.MiddlewareParams,
    next: PrismaNextMiddleware,
  ) => Promise<any>;
  findFirst?: (
    params: Prisma.MiddlewareParams,
    next: PrismaNextMiddleware,
  ) => Promise<any>;
  findUnique?: (
    params: Prisma.MiddlewareParams,
    next: PrismaNextMiddleware,
  ) => Promise<any>;
  count?: (
    params: Prisma.MiddlewareParams,
    next: PrismaNextMiddleware,
  ) => Promise<any>;
  create?: (
    params: Prisma.MiddlewareParams,
    next: PrismaNextMiddleware,
  ) => Promise<any>;
  update?: (
    params: Prisma.MiddlewareParams,
    next: PrismaNextMiddleware,
  ) => Promise<any>;
  updateMany?: (
    params: Prisma.MiddlewareParams,
    next: PrismaNextMiddleware,
  ) => Promise<any>;
  delete?: (
    params: Prisma.MiddlewareParams,
    next: PrismaNextMiddleware,
  ) => Promise<any>;
  deleteMany?: (
    params: Prisma.MiddlewareParams,
    next: PrismaNextMiddleware,
  ) => Promise<any>;
}

export interface MiddlewareActions {
  findMany?: [
    (
      params: Prisma.MiddlewareParams,
      next: PrismaNextMiddleware,
    ) => Promise<any>,
  ];
  findFirst?: [
    (
      params: Prisma.MiddlewareParams,
      next: PrismaNextMiddleware,
    ) => Promise<any>,
  ];
  findUnique?: [
    (
      params: Prisma.MiddlewareParams,
      next: PrismaNextMiddleware,
    ) => Promise<any>,
  ];
  count?: [
    (
      params: Prisma.MiddlewareParams,
      next: PrismaNextMiddleware,
    ) => Promise<any>,
  ];
  create?: [
    (
      params: Prisma.MiddlewareParams,
      next: PrismaNextMiddleware,
    ) => Promise<any>,
  ];
  update?: [
    (
      params: Prisma.MiddlewareParams,
      next: PrismaNextMiddleware,
    ) => Promise<any>,
  ];
  updateMany?: [
    (
      params: Prisma.MiddlewareParams,
      next: PrismaNextMiddleware,
    ) => Promise<any>,
  ];
  delete?: [
    (
      params: Prisma.MiddlewareParams,
      next: PrismaNextMiddleware,
    ) => Promise<any>,
  ];
  deleteMany?: [
    (
      params: Prisma.MiddlewareParams,
      next: PrismaNextMiddleware,
    ) => Promise<any>,
  ];
}

export interface ModelMiddlewareMap {
  [key: string]: MiddlewareActions;
}
