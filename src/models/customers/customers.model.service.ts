import { Injectable } from '@nestjs/common';
import { Prisma, Customer } from '@prisma/client';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { ModelService } from 'src/libs/resources/types';

@Injectable()
export class CustomersModelService implements ModelService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(args?: Prisma.CustomerFindManyArgs): Promise<Customer[]> {
    return this.prisma.customer.findMany(args);
  }

  async findFirst(args?: Prisma.CustomerFindFirstArgs): Promise<Customer> {
    return this.prisma.customer.findFirst(args);
  }

  async findUnique(args?: Prisma.CustomerFindUniqueArgs): Promise<Customer> {
    return this.prisma.customer.findUnique(args);
  }

  async count(args?: Prisma.CustomerCountArgs): Promise<number> {
    return this.prisma.customer.count(args);
  }

  async create(args: Prisma.CustomerCreateArgs): Promise<Customer> {
    return this.prisma.customer.create(args);
  }

  async update(args: Prisma.CustomerUpdateArgs): Promise<Customer> {
    return this.prisma.customer.update(args);
  }

  async updateMany(
    args: Prisma.CustomerUpdateManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.customer.updateMany(args);
  }

  async delete(args: Prisma.CustomerDeleteArgs): Promise<Customer> {
    return this.prisma.customer.delete(args);
  }

  async deleteMany(
    args: Prisma.CustomerDeleteManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.customer.deleteMany(args);
  }
}
