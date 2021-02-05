import { Brand, BrandStatus } from '@prisma/client';
import { Expose } from 'class-transformer';

export class BrandDto implements Brand {
  @Expose({ groups: [] })
  id: string;
  @Expose({ groups: [] })
  status: BrandStatus;
  @Expose({ groups: [] })
  createdAt: Date;
  @Expose({ groups: [] })
  updatedAt: Date;
  @Expose({ groups: [] })
  deletedAt: Date | null;
}
