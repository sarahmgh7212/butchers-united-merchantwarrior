import { Brand, BrandStatus } from '@prisma/client';
import { Expose } from 'class-transformer';

export class BrandDto implements Brand {
  @Expose({ groups: [] })
  id: string;

  @Expose({ groups: [] })
  name: string;

  @Expose({ groups: [] })
  logoId: string;

  @Expose({ groups: [] })
  supplierId: string | null;

  @Expose({ groups: [] })
  supplier_id: string | null;

  @Expose({ groups: [] })
  status: BrandStatus;

  @Expose({ groups: [] })
  createdAt: Date;

  @Expose({ groups: [] })
  updatedAt: Date;

  @Expose({ groups: [] })
  deletedAt: Date | null;
}
