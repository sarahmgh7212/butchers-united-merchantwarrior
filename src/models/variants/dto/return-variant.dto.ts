import { VariantStatus } from '@prisma/client';
import { Expose } from 'class-transformer';

export class ReturnVariantDto {
  @Expose({ groups: [] })
  id: string;

  @Expose({ groups: [] })
  status: VariantStatus;

  @Expose({ groups: [] })
  description: string;

  @Expose({ groups: [] })
  sellEx: number;

  @Expose({ groups: [] })
  sellGst: number;

  @Expose({ groups: [] })
  costEx: number;

  @Expose({ groups: [] })
  costGst: number;

  @Expose({ groups: [] })
  qtyAvailable: number;

  @Expose({ groups: [] })
  qtySold: number;

  @Expose({ groups: [] })
  availableDate: Date;

  @Expose({ groups: [] })
  invoiceToOrderRatio: number;

  @Expose({ groups: [] })
  stepQty: number;

  @Expose({ groups: [] })
  minimumQty: number;

  @Expose({ groups: [] })
  product_id: string;

  @Expose({ groups: [] })
  discount_id: string;

  @Expose({ groups: [] })
  createdAt: Date;

  @Expose({ groups: [] })
  updatedAt: Date;

  @Expose({ groups: [] })
  deletedAt: Date | null;
}
