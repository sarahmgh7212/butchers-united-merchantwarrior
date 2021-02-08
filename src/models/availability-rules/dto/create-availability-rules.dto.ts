import { IsIn, IsString } from 'class-validator';

import { AvailabilityRulesStatus, RuleType } from '@prisma/client';

export class CreateAvailabilityRulesDto {
  @IsIn(Object.values(AvailabilityRulesStatus))
  status: AvailabilityRulesStatus;

  @IsString()
  variant_id: string;
  @IsIn(Object.values(RuleType))
  type: RuleType;

  @IsString()
  regionIds: string[];

  @IsString()
  customerType: string | null;

  @IsString()
  customerIds: string[];

  @IsString()
  tags: string[];
}
