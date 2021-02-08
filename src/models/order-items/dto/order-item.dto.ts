import { OrderItem } from '@prisma/client';
import { Expose } from 'class-transformer';
import { GenericObject } from 'src/types';

export class OrderItemDto implements OrderItem {
  @Expose({ groups: [] })
  id: string;

  @Expose({ groups: [] })
  qty_ordered: number;

  @Expose({ groups: [] })
  qty_received: number | null;

  @Expose({ groups: [] })
  sell_ex: number;

  @Expose({ groups: [] })
  sell_gst: number;

  @Expose({ groups: [] })
  is_estimate: boolean;

  @Expose({ groups: [] })
  product_blob: GenericObject | null;

  @Expose({ groups: [] })
  order_id: string;

  @Expose({ groups: [] })
  fd_variant_id: string;

  @Expose({ groups: [] })
  createdAt: Date;

  @Expose({ groups: [] })
  updatedAt: Date;

  @Expose({ groups: [] })
  deletedAt: Date | null;
}
