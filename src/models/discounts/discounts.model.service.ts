import { Injectable } from '@nestjs/common';
import { Prisma, Discount } from '@prisma/client';
import { PrismaService } from '../../core/prisma/prisma.service';
import { ModelService } from '../../libs/resources/types';

@Injectable()
export class DiscountsModelService implements ModelService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(args?: Prisma.DiscountFindManyArgs): Promise<Discount[]> {
    return this.prisma.discount.findMany(args);
  }

  async findFirst(args?: Prisma.DiscountFindFirstArgs): Promise<Discount> {
    return this.prisma.discount.findFirst(args);
  }

  async findUnique(args?: Prisma.DiscountFindUniqueArgs): Promise<Discount> {
    return this.prisma.discount.findUnique(args);
  }

  async count(args?: Prisma.DiscountCountArgs): Promise<number> {
    return this.prisma.discount.count(args);
  }

  async create(args: Prisma.DiscountCreateArgs): Promise<Discount> {
    return this.prisma.discount.create(args);
  }

  async update(args: Prisma.DiscountUpdateArgs): Promise<Discount> {
    return this.prisma.discount.update(args);
  }

  async updateMany(
    args: Prisma.DiscountUpdateManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.discount.updateMany(args);
  }

  async delete(args: Prisma.DiscountDeleteArgs): Promise<Discount> {
    return this.prisma.discount.delete(args);
  }

  async deleteMany(
    args: Prisma.DiscountDeleteManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.discount.deleteMany(args);
  }
}
