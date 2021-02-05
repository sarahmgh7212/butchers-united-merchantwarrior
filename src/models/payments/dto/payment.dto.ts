import { Payment } from '@prisma/client';
import { Expose } from 'class-transformer';

export class PaymentDto implements Payment {
  @Expose({ groups: [] })
  id: string;

  @Expose({ groups: [] })
  receipt_number: number | null;

  @Expose({ groups: [] })
  notes: string | null;

  @Expose({ groups: [] })
  amount: number | null;

  @Expose({ groups: [] })
  createdAt: Date;

  @Expose({ groups: [] })
  updatedAt: Date;

  @Expose({ groups: [] })
  deletedAt: Date | null;
}
