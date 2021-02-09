import { Media, MediaStatus, MediaType } from '@prisma/client';
import { Expose } from 'class-transformer';

export class MediaDto implements Media {
  @Expose({ groups: [] })
  id: string;

  @Expose({ groups: [] })
  status: MediaStatus;

  @Expose({ groups: [] })
  label: string;

  @Expose({ groups: [] })
  type: MediaType;

  @Expose({ groups: [] })
  businessId: string;

  @Expose({ groups: [] })
  createdAt: Date;

  @Expose({ groups: [] })
  updatedAt: Date;

  @Expose({ groups: [] })
  deletedAt: Date | null;

  @Expose({ groups: [] })
  productId: string | null;
}
