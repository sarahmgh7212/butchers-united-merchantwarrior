import { Injectable } from '@nestjs/common';
import { Prisma, PaymentMethod } from '@prisma/client';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { PrismaEntityService } from 'src/libs/resources/types';

@Injectable()
export class PaymentMethodModelService implements PrismaEntityService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(
    args?: Prisma.PaymentMethodFindManyArgs,
  ): Promise<PaymentMethod[]> {
    return this.prisma.paymentMethod.findMany(args);
  }

  async findFirst(
    args?: Prisma.PaymentMethodFindFirstArgs,
  ): Promise<PaymentMethod> {
    return this.prisma.paymentMethod.findFirst(args);
  }

  async findUnique(
    args?: Prisma.PaymentMethodFindUniqueArgs,
  ): Promise<PaymentMethod> {
    return this.prisma.paymentMethod.findUnique(args);
  }

  async count(args?: Prisma.PaymentMethodCountArgs): Promise<number> {
    return this.prisma.paymentMethod.count(args);
  }

  async create(args: Prisma.PaymentMethodCreateArgs): Promise<PaymentMethod> {
    return this.prisma.paymentMethod.create(args);
  }

  async update(args: Prisma.PaymentMethodUpdateArgs): Promise<PaymentMethod> {
    return this.prisma.paymentMethod.update(args);
  }

  async updateMany(
    args: Prisma.PaymentMethodUpdateManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.paymentMethod.updateMany(args);
  }

  async delete(args: Prisma.PaymentMethodDeleteArgs): Promise<PaymentMethod> {
    return this.prisma.paymentMethod.delete(args);
  }

  async deleteMany(
    args: Prisma.PaymentMethodDeleteManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.paymentMethod.deleteMany(args);
  }
}
