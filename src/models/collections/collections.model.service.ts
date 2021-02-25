import { Injectable } from '@nestjs/common';
import { Prisma, Collection } from '@prisma/client';
import { PrismaService } from '../../core/prisma/prisma.service';
import { ModelService } from '../../libs/resources/types';

@Injectable()
export class CollectionsModelService implements ModelService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(args?: Prisma.CollectionFindManyArgs): Promise<Collection[]> {
    return this.prisma.collection.findMany(args);
  }

  async findFirst(args?: Prisma.CollectionFindFirstArgs): Promise<Collection> {
    return this.prisma.collection.findFirst(args);
  }

  async findUnique(
    args?: Prisma.CollectionFindUniqueArgs,
  ): Promise<Collection> {
    return this.prisma.collection.findUnique(args);
  }

  async count(args?: Prisma.CollectionCountArgs): Promise<number> {
    return this.prisma.collection.count(args);
  }

  async create(args: Prisma.CollectionCreateArgs): Promise<Collection> {
    return this.prisma.collection.create(args);
  }

  async update(args: Prisma.CollectionUpdateArgs): Promise<Collection> {
    return this.prisma.collection.update(args);
  }

  async updateMany(
    args: Prisma.CollectionUpdateManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.collection.updateMany(args);
  }

  async delete(args: Prisma.CollectionDeleteArgs): Promise<Collection> {
    return this.prisma.collection.delete(args);
  }

  async deleteMany(
    args: Prisma.CollectionDeleteManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.collection.deleteMany(args);
  }
}
