import {
  AvailabilityRule,
  AvailabilityRulesStatus,
  CustomerableType,
  RuleType,
} from '@prisma/client';
import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class AvailabilityRulesDto implements AvailabilityRule {
  @Expose({ groups: [] })
  id: string;

  @Expose({ groups: [] })
  status: AvailabilityRulesStatus;

  @Expose({ groups: [] })
  type: RuleType;

  @Expose({ groups: [] })
  regionIds: string[];

  @IsString()
  variantId: string;

  @Expose({ groups: [] })
  customerType: CustomerableType | null;

  @Expose({ groups: [] })
  customerIds: string[];

  @Expose({ groups: [] })
  tags: string[];

  @Expose({ groups: [] })
  createdAt: Date;

  @Expose({ groups: [] })
  updatedAt: Date;

  @Expose({ groups: [] })
  deletedAt: Date | null;
}
