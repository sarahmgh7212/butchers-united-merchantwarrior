import { Injectable } from '@nestjs/common';
import { Prisma, Place } from '@prisma/client';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { ModelService } from 'src/libs/resources/types';

@Injectable()
export class PlacesModelService implements ModelService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(args?: Prisma.PlaceFindManyArgs): Promise<Place[]> {
    return this.prisma.place.findMany(args);
  }

  async findFirst(args?: Prisma.PlaceFindFirstArgs): Promise<Place> {
    return this.prisma.place.findFirst(args);
  }

  async findUnique(args?: Prisma.PlaceFindUniqueArgs): Promise<Place> {
    return this.prisma.place.findUnique(args);
  }

  async count(args?: Prisma.PlaceCountArgs): Promise<number> {
    return this.prisma.place.count(args);
  }

  async create(args: Prisma.PlaceCreateArgs): Promise<Place> {
    return this.prisma.place.create(args);
  }

  async update(args: Prisma.PlaceUpdateArgs): Promise<Place> {
    return this.prisma.place.update(args);
  }

  async updateMany(
    args: Prisma.PlaceUpdateManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.place.updateMany(args);
  }

  async delete(args: Prisma.PlaceDeleteArgs): Promise<Place> {
    return this.prisma.place.delete(args);
  }

  async deleteMany(
    args: Prisma.PlaceDeleteManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.place.deleteMany(args);
  }
}
