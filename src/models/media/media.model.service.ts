import { Injectable } from '@nestjs/common';
import { Prisma, Media } from '@prisma/client';
import { PrismaService } from '../../core/prisma/prisma.service';
import { PrismaEntityService } from '../../libs/resources/types';

@Injectable()
export class MediaModelService implements PrismaEntityService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(args?: Prisma.MediaFindManyArgs): Promise<Media[]> {
    return this.prisma.media.findMany(args);
  }

  async findFirst(args?: Prisma.MediaFindFirstArgs): Promise<Media> {
    return this.prisma.media.findFirst(args);
  }

  async findUnique(args?: Prisma.MediaFindUniqueArgs): Promise<Media> {
    return this.prisma.media.findUnique(args);
  }

  async count(args?: Prisma.MediaCountArgs): Promise<number> {
    return this.prisma.media.count(args);
  }

  async create(args: Prisma.MediaCreateArgs): Promise<Media> {
    return this.prisma.media.create(args);
  }

  async update(args: Prisma.MediaUpdateArgs): Promise<Media> {
    return this.prisma.media.update(args);
  }

  async updateMany(
    args: Prisma.MediaUpdateManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.media.updateMany(args);
  }

  async delete(args: Prisma.MediaDeleteArgs): Promise<Media> {
    return this.prisma.media.delete(args);
  }

  async deleteMany(
    args: Prisma.MediaDeleteManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.media.deleteMany(args);
  }
}
