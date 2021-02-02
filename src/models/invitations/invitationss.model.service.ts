import { Injectable } from '@nestjs/common';
import { Prisma, Invitation } from '@prisma/client';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { PrismaEntityService } from 'src/libs/resources/types';

@Injectable()
export class InvitationsModelService implements PrismaEntityService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(args?: Prisma.InvitationFindManyArgs): Promise<Invitation[]> {
    return this.prisma.invitation.findMany(args);
  }

  async findFirst(args?: Prisma.InvitationFindFirstArgs): Promise<Invitation> {
    return this.prisma.invitation.findFirst(args);
  }

  async findUnique(
    args?: Prisma.InvitationFindUniqueArgs,
  ): Promise<Invitation> {
    return this.prisma.invitation.findUnique(args);
  }

  async count(args?: Prisma.InvitationCountArgs): Promise<number> {
    return this.prisma.invitation.count(args);
  }

  async create(args: Prisma.InvitationCreateArgs): Promise<Invitation> {
    return this.prisma.invitation.create(args);
  }

  async update(args: Prisma.InvitationUpdateArgs): Promise<Invitation> {
    return this.prisma.invitation.update(args);
  }

  async updateMany(
    args: Prisma.InvitationUpdateManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.invitation.updateMany(args);
  }

  async delete(args: Prisma.InvitationDeleteArgs): Promise<Invitation> {
    return this.prisma.invitation.delete(args);
  }

  async deleteMany(
    args: Prisma.InvitationDeleteManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.invitation.deleteMany(args);
  }
}
