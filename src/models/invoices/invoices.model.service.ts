import { Injectable } from '@nestjs/common';
import { Prisma, Invoice } from '@prisma/client';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { PrismaEntityService } from 'src/libs/resources/types';

@Injectable()
export class InvoicesModelService implements PrismaEntityService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(args?: Prisma.InvoiceFindManyArgs): Promise<Invoice[]> {
    return this.prisma.invoice.findMany(args);
  }

  async findFirst(args?: Prisma.InvoiceFindFirstArgs): Promise<Invoice> {
    return this.prisma.invoice.findFirst(args);
  }

  async findUnique(args?: Prisma.InvoiceFindUniqueArgs): Promise<Invoice> {
    return this.prisma.invoice.findUnique(args);
  }

  async count(args?: Prisma.InvoiceCountArgs): Promise<number> {
    return this.prisma.invoice.count(args);
  }

  async create(args: Prisma.InvoiceCreateArgs): Promise<Invoice> {
    return this.prisma.invoice.create(args);
  }

  async update(args: Prisma.InvoiceUpdateArgs): Promise<Invoice> {
    return this.prisma.invoice.update(args);
  }

  async updateMany(
    args: Prisma.InvoiceUpdateManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.invoice.updateMany(args);
  }

  async delete(args: Prisma.InvoiceDeleteArgs): Promise<Invoice> {
    return this.prisma.invoice.delete(args);
  }

  async deleteMany(
    args: Prisma.InvoiceDeleteManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.invoice.deleteMany(args);
  }
}
