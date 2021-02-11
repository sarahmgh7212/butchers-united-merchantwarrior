import { Customer, CustomerableType } from '@prisma/client';
import { Expose } from 'class-transformer';
import { GenericObject } from 'src/types';

export class CustomerDto implements Customer {
  @Expose({ groups: [] })
  id: string;

  @Expose({ groups: [] })
  customerableId: string | null;

  @Expose({ groups: [] })
  customerableType: CustomerableType;

  @Expose({ groups: [] })
  tags: GenericObject | null;

  @Expose({ groups: [] })
  createdAt: Date;

  @Expose({ groups: [] })
  updatedAt: Date;

  @Expose({ groups: [] })
  deletedAt: Date | null;
}
