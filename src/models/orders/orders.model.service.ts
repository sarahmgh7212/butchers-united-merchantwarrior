import { Injectable } from '@nestjs/common';
import { Prisma, Order } from '@prisma/client';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { PrismaEntityService } from 'src/libs/resources/types';

@Injectable()
export class OrdersModelService implements PrismaEntityService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(args?: Prisma.OrderFindManyArgs): Promise<Order[]> {
    return this.prisma.order.findMany(args);
  }

  async findFirst(args?: Prisma.OrderFindFirstArgs): Promise<Order> {
    return this.prisma.order.findFirst(args);
  }

  async findUnique(args?: Prisma.OrderFindUniqueArgs): Promise<Order> {
    return this.prisma.order.findUnique(args);
  }

  async count(args?: Prisma.OrderCountArgs): Promise<number> {
    return this.prisma.order.count(args);
  }

  async create(args: Prisma.OrderCreateArgs): Promise<Order> {
    return this.prisma.order.create(args);
  }

  async update(args: Prisma.OrderUpdateArgs): Promise<Order> {
    return this.prisma.order.update(args);
  }

  async updateMany(
    args: Prisma.OrderUpdateManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.order.updateMany(args);
  }

  async delete(args: Prisma.OrderDeleteArgs): Promise<Order> {
    return this.prisma.order.delete(args);
  }

  async deleteMany(
    args: Prisma.OrderDeleteManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.order.deleteMany(args);
  }
}
