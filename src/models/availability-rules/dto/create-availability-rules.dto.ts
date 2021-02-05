import { IsIn, IsString } from 'class-validator';

import { AvailabilityRulesStatus } from '@prisma/client';

export class CreateAvailabilityRulesDto {
  @IsIn(Object.values(AvailabilityRulesStatus))
  status: AvailabilityRulesStatus;

  @IsString()
  variant_id: string;
}
