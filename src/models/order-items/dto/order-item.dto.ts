import { OrderItem } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';
import { Expose } from 'class-transformer';
import { GenericObject } from 'src/types';

export class OrderItemDto implements OrderItem {
  @Expose({ groups: [] })
  id: string;

  @Expose({ groups: [] })
  qtyOrdered: number;

  @Expose({ groups: [] })
  qtyReceived: number | null;

  @Expose({ groups: [] })
  sellEx: Decimal;

  @Expose({ groups: [] })
  sellGst: Decimal;

  @Expose({ groups: [] })
  isEstimate: boolean;

  @Expose({ groups: [] })
  productBlob: GenericObject | null;

  @Expose({ groups: [] })
  orderId: string;

  @Expose({ groups: [] })
  fdVariantId: string;

  @Expose({ groups: [] })
  createdAt: Date;

  @Expose({ groups: [] })
  updatedAt: Date;

  @Expose({ groups: [] })
  deletedAt: Date | null;
}
