import { Injectable } from '@nestjs/common';
import { Prisma, Brand } from '@prisma/client';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { PrismaEntityService } from 'src/libs/resources/types';

@Injectable()
export class BrandsModelService implements PrismaEntityService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(args?: Prisma.BrandFindManyArgs): Promise<Brand[]> {
    return this.prisma.brand.findMany(args);
  }

  async findFirst(args?: Prisma.BrandFindFirstArgs): Promise<Brand> {
    return this.prisma.brand.findFirst(args);
  }

  async findUnique(args?: Prisma.BrandFindUniqueArgs): Promise<Brand> {
    return this.prisma.brand.findUnique(args);
  }

  async count(args?: Prisma.BrandCountArgs): Promise<number> {
    return this.prisma.brand.count(args);
  }

  async create(args: Prisma.BrandCreateArgs): Promise<Brand> {
    return this.prisma.brand.create(args);
  }

  async update(args: Prisma.BrandUpdateArgs): Promise<Brand> {
    return this.prisma.brand.update(args);
  }

  async updateMany(
    args: Prisma.BrandUpdateManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.brand.updateMany(args);
  }

  async delete(args: Prisma.BrandDeleteArgs): Promise<Brand> {
    return this.prisma.brand.delete(args);
  }

  async deleteMany(
    args: Prisma.BrandDeleteManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.brand.deleteMany(args);
  }
}
