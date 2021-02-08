import { ProductUnit, ProductUnitStatus } from '@prisma/client';
import { Expose } from 'class-transformer';

export class ProductUnitDto implements ProductUnit {
  @Expose({ groups: [] })
  id: string;

  @Expose({ groups: [] })
  singular: string;

  @Expose({ groups: [] })
  abbreviation: string;

  @Expose({ groups: [] })
  status: ProductUnitStatus;

  @Expose({ groups: [] })
  createdAt: Date;

  @Expose({ groups: [] })
  updatedAt: Date;

  @Expose({ groups: [] })
  deletedAt: Date | null;
}
