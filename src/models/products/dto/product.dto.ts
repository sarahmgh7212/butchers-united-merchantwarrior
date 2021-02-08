import { Product, ProductStatus } from '@prisma/client';
import { Expose } from 'class-transformer';
import { GenericObject } from 'src/types';

export class ProductDto implements Product {
  @Expose({ groups: [] })
  id: string;

  @Expose({ groups: [] })
  name: string;

  @Expose({ groups: [] })
  description: string;

  @Expose({ groups: [] })
  external_reference: string | null;

  @Expose({ groups: [] })
  status: ProductStatus;

  @Expose({ groups: [] })
  order_units_id: string;

  @Expose({ groups: [] })
  invoice_units_id: string;

  @Expose({ groups: [] })
  is_estimated_qty: boolean | null;

  @Expose({ groups: [] })
  fd_supplier_id: string;

  @Expose({ groups: [] })
  fd_manufacturer_id: string | null;

  @Expose({ groups: [] })
  brand_id: string | null;

  @Expose({ groups: [] })
  tags: GenericObject | null;

  @Expose({ groups: [] })
  createdAt: Date;

  @Expose({ groups: [] })
  updatedAt: Date;

  @Expose({ groups: [] })
  deletedAt: Date | null;

  @Expose({ groups: [] })
  businessId: string | null;

  @Expose({ groups: [] })
  productUnitId: string | null;

  @Expose({ groups: [] })
  mediaId: string | null;
}
