import { Injectable } from '@nestjs/common';
import { Prisma, Invite } from '@prisma/client';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { ModelService } from 'src/libs/resources/types';

@Injectable()
export class InvitesModelService implements ModelService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(args?: Prisma.InviteFindManyArgs): Promise<Invite[]> {
    return this.prisma.invite.findMany(args);
  }

  async findFirst(args?: Prisma.InviteFindFirstArgs): Promise<Invite> {
    return this.prisma.invite.findFirst(args);
  }

  async findUnique(args?: Prisma.InviteFindUniqueArgs): Promise<Invite> {
    return this.prisma.invite.findUnique(args);
  }

  async count(args?: Prisma.InviteCountArgs): Promise<number> {
    return this.prisma.invite.count(args);
  }

  async create(args: Prisma.InviteCreateArgs): Promise<Invite> {
    return this.prisma.invite.create(args);
  }

  async update(args: Prisma.InviteUpdateArgs): Promise<Invite> {
    return this.prisma.invite.update(args);
  }

  async updateMany(
    args: Prisma.InviteUpdateManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.invite.updateMany(args);
  }

  async delete(args: Prisma.InviteDeleteArgs): Promise<Invite> {
    return this.prisma.invite.delete(args);
  }

  async deleteMany(
    args: Prisma.InviteDeleteManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.invite.deleteMany(args);
  }
}
