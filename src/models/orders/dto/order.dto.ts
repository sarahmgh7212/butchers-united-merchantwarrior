import { Order } from '@prisma/client';
import { Expose } from 'class-transformer';
import { GenericObject } from 'src/types';

export class OrderDto implements Order {
  @Expose({ groups: [] })
  id: string;

  @Expose({ groups: [] })
  order_ref: number;

  @Expose({ groups: [] })
  completedAt: Date | null;

  @Expose({ groups: [] })
  shippedAt: Date | null;

  @Expose({ groups: [] })
  packedAt: Date | null;

  @Expose({ groups: [] })
  processedAt: Date | null;

  @Expose({ groups: [] })
  paidAt: Date | null;

  @Expose({ groups: [] })
  fd_customer_id: string;

  @Expose({ groups: [] })
  fd_supplier_id: string;

  @Expose({ groups: [] })
  fd_orderer_id: string;

  @Expose({ groups: [] })
  createdAt: Date;

  @Expose({ groups: [] })
  updatedAt: Date;

  @Expose({ groups: [] })
  deletedAt: Date | null;
}
