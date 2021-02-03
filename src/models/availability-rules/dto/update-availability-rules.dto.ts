import { PartialType } from '@nestjs/mapped-types';
import { CreateAvailabilityRulesDto } from './create-availability-rules.dto';

export class UpdateAvailabilityRulesDto extends PartialType(
  CreateAvailabilityRulesDto,
) {}
