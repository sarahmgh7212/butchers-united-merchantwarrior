import { Collection, CollectionStatus } from '@prisma/client';
import { Expose } from 'class-transformer';
import { GenericObject } from 'src/types';

export class CollectionDto implements Collection {
  @Expose({ groups: [] })
  id: string;

  @Expose({ groups: [] })
  name: string;

  @Expose({ groups: [] })
  description: string;

  @Expose({ groups: [] })
  status: CollectionStatus;

  @Expose({ groups: [] })
  tags: GenericObject | null;

  @Expose({ groups: [] })
  logoId: string;

  @Expose({ groups: [] })
  createdAt: Date | null;

  @Expose({ groups: [] })
  updatedAt: Date | null;

  @Expose({ groups: [] })
  deletedAt: Date | null;
}
