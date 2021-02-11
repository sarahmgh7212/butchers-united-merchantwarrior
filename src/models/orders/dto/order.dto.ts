import { Order } from '@prisma/client';
import { Expose } from 'class-transformer';
import { GenericObject } from 'src/types';

export class OrderDto implements Order {
  @Expose({ groups: [] })
  id: string;

  @Expose({ groups: [] })
  orderRef: number;

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
  fdDeliveryLocationId: string;

  @Expose({ groups: [] })
  fdCustomerId: string;

  @Expose({ groups: [] })
  fdSupplierId: string;

  @Expose({ groups: [] })
  fdOrdererId: string;

  @Expose({ groups: [] })
  createdAt: Date;

  @Expose({ groups: [] })
  updatedAt: Date;

  @Expose({ groups: [] })
  deletedAt: Date | null;
}
