import { PartialType } from '@nestjs/mapped-types';
import { AvailabilityRulesStatus } from '@prisma/client';
import { IsIn, IsOptional, IsString } from 'class-validator';
import { CreateAvailabilityRulesDto } from './create-availability-rules.dto';

export class UpdateAvailabilityRulesDto extends PartialType(
  CreateAvailabilityRulesDto,
) {
  @IsIn(Object.values(AvailabilityRulesStatus))
  @IsOptional()
  status: AvailabilityRulesStatus;

  @IsString()
  @IsOptional()
  variant_id: string;
}
