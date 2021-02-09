import { Payment, TransactionType } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';
import { Expose } from 'class-transformer';
import { GenericObject } from 'src/types';

export class PaymentDto implements Payment {
  @Expose({ groups: [] })
  id: string;

  @Expose({ groups: [] })
  receiptNumber: number | null;

  @Expose({ groups: [] })
  notes: string | null;

  @Expose({ groups: [] })
  amount: Decimal | null;

  @Expose({ groups: [] })
  transactionType: TransactionType;

  @Expose({ groups: [] })
  completedAt: Date | null;

  @Expose({ groups: [] })
  failedAt: Date | null;

  @Expose({ groups: [] })
  providerId: string | null;

  @Expose({ groups: [] })
  data: GenericObject | null;

  @Expose({ groups: [] })
  paymentMethodId: string;

  @Expose({ groups: [] })
  fdOrderId: string;

  @Expose({ groups: [] })
  createdAt: Date;

  @Expose({ groups: [] })
  updatedAt: Date;

  @Expose({ groups: [] })
  deletedAt: Date | null;
}
