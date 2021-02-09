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
  externalReference: string | null;

  @Expose({ groups: [] })
  status: ProductStatus;

  @Expose({ groups: [] })
  isEstimatedQty: boolean | null;

  @Expose({ groups: [] })
  tags: GenericObject | null;

  @Expose({ groups: [] })
  orderUnitsId: string;

  @Expose({ groups: [] })
  invoiceUnitsId: string;

  @Expose({ groups: [] })
  fdSupplierId: string;

  @Expose({ groups: [] })
  fdManufacturerId: string | null;

  @Expose({ groups: [] })
  brandId: string | null;

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
