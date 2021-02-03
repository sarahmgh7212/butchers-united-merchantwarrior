import { Injectable } from '@nestjs/common';
import { Prisma, AvailabilityRule } from '@prisma/client';
import { PrismaService } from '../../core/prisma/prisma.service';
import { PrismaEntityService } from '../../libs/resources/types';

@Injectable()
export class AvailabilityRulesModelService implements PrismaEntityService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(
    args?: Prisma.AvailabilityRuleFindManyArgs,
  ): Promise<AvailabilityRule[]> {
    return this.prisma.availabilityRule.findMany(args);
  }

  async findFirst(
    args?: Prisma.AvailabilityRuleFindFirstArgs,
  ): Promise<AvailabilityRule> {
    return this.prisma.availabilityRule.findFirst(args);
  }

  async findUnique(
    args?: Prisma.AvailabilityRuleFindUniqueArgs,
  ): Promise<AvailabilityRule> {
    return this.prisma.availabilityRule.findUnique(args);
  }

  async count(args?: Prisma.AvailabilityRuleCountArgs): Promise<number> {
    return this.prisma.availabilityRule.count(args);
  }

  async create(
    args: Prisma.AvailabilityRuleCreateArgs,
  ): Promise<AvailabilityRule> {
    return this.prisma.availabilityRule.create(args);
  }

  async update(
    args: Prisma.AvailabilityRuleUpdateArgs,
  ): Promise<AvailabilityRule> {
    return this.prisma.availabilityRule.update(args);
  }

  async updateMany(
    args: Prisma.AvailabilityRuleUpdateManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.availabilityRule.updateMany(args);
  }

  async delete(
    args: Prisma.AvailabilityRuleDeleteArgs,
  ): Promise<AvailabilityRule> {
    return this.prisma.availabilityRule.delete(args);
  }

  async deleteMany(
    args: Prisma.AvailabilityRuleDeleteManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.availabilityRule.deleteMany(args);
  }
}
