import { Injectable } from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { PrismaEntityService } from 'src/libs/resources/types';

@Injectable()
export class ProductsModelService implements PrismaEntityService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(args?: Prisma.ProductFindManyArgs): Promise<Product[]> {
    return this.prisma.product.findMany(args);
  }

  async findFirst(args?: Prisma.ProductFindFirstArgs): Promise<Product> {
    return this.prisma.product.findFirst(args);
  }

  async findUnique(args?: Prisma.ProductFindUniqueArgs): Promise<Product> {
    return this.prisma.product.findUnique(args);
  }

  async count(args?: Prisma.ProductCountArgs): Promise<number> {
    return this.prisma.product.count(args);
  }

  async create(args: Prisma.ProductCreateArgs): Promise<Product> {
    return this.prisma.product.create(args);
  }

  async update(args: Prisma.ProductUpdateArgs): Promise<Product> {
    return this.prisma.product.update(args);
  }

  async updateMany(
    args: Prisma.ProductUpdateManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.product.updateMany(args);
  }

  async delete(args: Prisma.ProductDeleteArgs): Promise<Product> {
    return this.prisma.product.delete(args);
  }

  async deleteMany(
    args: Prisma.ProductDeleteManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.product.deleteMany(args);
  }
}
