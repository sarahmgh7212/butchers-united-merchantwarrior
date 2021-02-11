import { IsIn, IsString } from 'class-validator';

import { AvailabilityRulesStatus, RuleType } from '@prisma/client';

export class CreateAvailabilityRulesDto {
  @IsIn(Object.values(AvailabilityRulesStatus))
  status: AvailabilityRulesStatus;

  @IsIn(Object.values(RuleType))
  type: RuleType;

  @IsString()
  variantId: string;

  @IsString()
  regionIds: string[];

  @IsString()
  customerType: string | null;

  @IsString()
  customerIds: string[];

  @IsString()
  tags: string[];
}
