import { Injectable } from '@nestjs/common';
import { Prisma, Variant } from '@prisma/client';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { ModelService } from 'src/libs/resources/types';

@Injectable()
export class VariantsModelService implements ModelService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(args?: Prisma.VariantFindManyArgs): Promise<Variant[]> {
    return this.prisma.variant.findMany(args);
  }

  async findFirst(args?: Prisma.VariantFindFirstArgs): Promise<Variant> {
    return this.prisma.variant.findFirst(args);
  }

  async findUnique(args?: Prisma.VariantFindUniqueArgs): Promise<Variant> {
    return this.prisma.variant.findUnique(args);
  }

  async count(args?: Prisma.VariantCountArgs): Promise<number> {
    return this.prisma.variant.count(args);
  }

  async create(args: Prisma.VariantCreateArgs): Promise<Variant> {
    return this.prisma.variant.create(args);
  }

  async update(args: Prisma.VariantUpdateArgs): Promise<Variant> {
    return this.prisma.variant.update(args);
  }

  async updateMany(
    args: Prisma.VariantUpdateManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.variant.updateMany(args);
  }

  async delete(args: Prisma.VariantDeleteArgs): Promise<Variant> {
    return this.prisma.variant.delete(args);
  }

  async deleteMany(
    args: Prisma.VariantDeleteManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.variant.deleteMany(args);
  }
}
