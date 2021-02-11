import { Injectable } from '@nestjs/common';
import { Prisma, ProductUnit } from '@prisma/client';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { PrismaEntityService } from 'src/libs/resources/types';

@Injectable()
export class ProductUnitModelService implements PrismaEntityService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(
    args?: Prisma.ProductUnitFindManyArgs,
  ): Promise<ProductUnit[]> {
    return this.prisma.productUnit.findMany(args);
  }

  async findFirst(
    args?: Prisma.ProductUnitFindFirstArgs,
  ): Promise<ProductUnit> {
    return this.prisma.productUnit.findFirst(args);
  }

  async findUnique(
    args?: Prisma.ProductUnitFindUniqueArgs,
  ): Promise<ProductUnit> {
    return this.prisma.productUnit.findUnique(args);
  }

  async count(args?: Prisma.ProductUnitCountArgs): Promise<number> {
    return this.prisma.productUnit.count(args);
  }

  async create(args: Prisma.ProductUnitCreateArgs): Promise<ProductUnit> {
    return this.prisma.productUnit.create(args);
  }

  async update(args: Prisma.ProductUnitUpdateArgs): Promise<ProductUnit> {
    return this.prisma.productUnit.update(args);
  }

  async updateMany(
    args: Prisma.ProductUnitUpdateManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.productUnit.updateMany(args);
  }

  async delete(args: Prisma.ProductUnitDeleteArgs): Promise<ProductUnit> {
    return this.prisma.productUnit.delete(args);
  }

  async deleteMany(
    args: Prisma.ProductUnitDeleteManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.productUnit.deleteMany(args);
  }
}
