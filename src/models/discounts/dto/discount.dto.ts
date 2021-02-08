import { Discount, DiscountStatus } from '@prisma/client';
import { Expose } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';

export class DiscountDto implements Discount {
  @Expose({ groups: [] })
  id: string;

  @Expose({ groups: [] })
  name: string;

  @Expose({ groups: [] })
  startAt: Date | null;

  @Expose({ groups: [] })
  endAt: Date | null;

  @Expose({ groups: [] })
  status: DiscountStatus;

  @Expose({ groups: [] })
  createdAt: Date;

  @Expose({ groups: [] })
  updatedAt: Date;

  @Expose({ groups: [] })
  deletedAt: Date | null;
}
