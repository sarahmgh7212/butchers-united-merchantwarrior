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
  img_uri: string;

  @Expose({ groups: [] })
  logo_id: string;

  @Expose({ groups: [] })
  logo_uri: string;

  @Expose({ groups: [] })
  tags: GenericObject;

  @Expose({ groups: [] })
  createdAt: Date | null;

  @Expose({ groups: [] })
  updatedAt: Date | null;

  @Expose({ groups: [] })
  deletedAt: Date | null;
}
