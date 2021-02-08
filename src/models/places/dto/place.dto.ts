import { Place } from '@prisma/client';
import { Expose } from 'class-transformer';

export class PlaceDto implements Place {
  @Expose({ groups: [] })
  id: string;

  @Expose({ groups: [] })
  createdAt: Date;

  @Expose({ groups: [] })
  updatedAt: Date;

  @Expose({ groups: [] })
  deletedAt: Date | null;
}
