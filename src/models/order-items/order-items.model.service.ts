import { Injectable } from '@nestjs/common';
import { Prisma, OrderItem } from '@prisma/client';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { ModelService } from 'src/libs/resources/types';

@Injectable()
export class OrderItemsModelService implements ModelService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(args?: Prisma.OrderItemFindManyArgs): Promise<OrderItem[]> {
    return this.prisma.orderItem.findMany(args);
  }

  async findFirst(args?: Prisma.OrderItemFindFirstArgs): Promise<OrderItem> {
    return this.prisma.orderItem.findFirst(args);
  }

  async findUnique(args?: Prisma.OrderItemFindUniqueArgs): Promise<OrderItem> {
    return this.prisma.orderItem.findUnique(args);
  }

  async count(args?: Prisma.OrderItemCountArgs): Promise<number> {
    return this.prisma.orderItem.count(args);
  }

  async create(args: Prisma.OrderItemCreateArgs): Promise<OrderItem> {
    return this.prisma.orderItem.create(args);
  }

  async update(args: Prisma.OrderItemUpdateArgs): Promise<OrderItem> {
    return this.prisma.orderItem.update(args);
  }

  async updateMany(
    args: Prisma.OrderItemUpdateManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.orderItem.updateMany(args);
  }

  async delete(args: Prisma.OrderItemDeleteArgs): Promise<OrderItem> {
    return this.prisma.orderItem.delete(args);
  }

  async deleteMany(
    args: Prisma.OrderItemDeleteManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.orderItem.deleteMany(args);
  }
}
