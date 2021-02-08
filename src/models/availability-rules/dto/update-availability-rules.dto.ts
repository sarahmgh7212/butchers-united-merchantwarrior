import { PartialType } from '@nestjs/mapped-types';
import { AvailabilityRulesStatus, RuleType } from '@prisma/client';
import { IsIn, IsOptional, IsString, IsUUID } from 'class-validator';
import { CreateAvailabilityRulesDto } from './create-availability-rules.dto';

export class UpdateAvailabilityRulesDto extends PartialType(
  CreateAvailabilityRulesDto,
) {
  @IsUUID()
  id: string;

  @IsIn(Object.values(AvailabilityRulesStatus))
  @IsOptional()
  status: AvailabilityRulesStatus;

  @IsString()
  @IsOptional()
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
