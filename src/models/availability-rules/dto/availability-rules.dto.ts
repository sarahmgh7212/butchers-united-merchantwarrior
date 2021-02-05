import { AvailabilityRule, AvailabilityRulesStatus } from '@prisma/client';
import { Expose } from 'class-transformer';

export class AvailabilityRulesDto implements AvailabilityRule {
  @Expose({ groups: [] })
  id: string;

  @Expose({ groups: [] })
  status: AvailabilityRulesStatus;

  @Expose({ groups: [] })
  variant_id: string;

  @Expose({ groups: [] })
  createdAt: Date;

  @Expose({ groups: [] })
  updatedAt: Date;

  @Expose({ groups: [] })
  deletedAt: Date | null;
}
