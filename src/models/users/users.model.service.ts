import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { ModelService } from 'src/libs/resources/types';

@Injectable()
export class UsersModelService implements ModelService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(args?: Prisma.UserFindManyArgs): Promise<User[]> {
    return this.prisma.user.findMany(args);
  }

  async findFirst(args?: Prisma.UserFindFirstArgs): Promise<User> {
    return this.prisma.user.findFirst(args);
  }

  async findUnique(args?: Prisma.UserFindUniqueArgs): Promise<User> {
    return this.prisma.user.findUnique(args);
  }

  async count(args?: Prisma.UserCountArgs): Promise<number> {
    return this.prisma.user.count(args);
  }

  async create(args: Prisma.UserCreateArgs): Promise<User> {
    return this.prisma.user.create(args);
  }

  async update(args: Prisma.UserUpdateArgs): Promise<User> {
    return this.prisma.user.update(args);
  }

  async updateMany(
    args: Prisma.UserUpdateManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.user.updateMany(args);
  }

  async delete(args: Prisma.UserDeleteArgs): Promise<User> {
    return this.prisma.user.delete(args);
  }

  async deleteMany(
    args: Prisma.UserDeleteManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.user.deleteMany(args);
  }
}
