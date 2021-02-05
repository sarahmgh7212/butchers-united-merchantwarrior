import { Discount, DiscountStatus } from '@prisma/client';
import { Expose } from 'class-transformer';

export class DiscountDto implements Discount {
  @Expose({ groups: [] })
  id: string;

  @Expose({ groups: [] })
  status: DiscountStatus;

  @Expose({ groups: [] })
  createdAt: Date;

  @Expose({ groups: [] })
  updatedAt: Date;

  @Expose({ groups: [] })
  deletedAt: Date | null;
}
