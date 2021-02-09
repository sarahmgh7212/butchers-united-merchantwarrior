import { Injectable } from '@nestjs/common';
import { Prisma, Cart } from '@prisma/client';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { PrismaEntityService } from 'src/libs/resources/types';

@Injectable()
export class CartsModelService implements PrismaEntityService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(args?: Prisma.CartFindManyArgs): Promise<Cart[]> {
    return this.prisma.cart.findMany(args);
  }

  async findFirst(args?: Prisma.CartFindFirstArgs): Promise<Cart> {
    return this.prisma.cart.findFirst(args);
  }

  async findUnique(args?: Prisma.CartFindUniqueArgs): Promise<Cart> {
    return this.prisma.cart.findUnique(args);
  }

  async count(args?: Prisma.CartCountArgs): Promise<number> {
    return this.prisma.cart.count(args);
  }

  async create(args: Prisma.CartCreateArgs): Promise<Cart> {
    return this.prisma.cart.create(args);
  }

  async update(args: Prisma.CartUpdateArgs): Promise<Cart> {
    return this.prisma.cart.update(args);
  }

  async updateMany(
    args: Prisma.CartUpdateManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.cart.updateMany(args);
  }

  async delete(args: Prisma.CartDeleteArgs): Promise<Cart> {
    return this.prisma.cart.delete(args);
  }

  async deleteMany(
    args: Prisma.CartDeleteManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.cart.deleteMany(args);
  }
}
