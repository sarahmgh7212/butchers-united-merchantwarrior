import { Cart } from '@prisma/client';
import { Expose } from 'class-transformer';
import { GenericObject } from 'src/types';

export class CartDto implements Cart {
  @Expose({ groups: [] })
  id: string;

  @Expose({ groups: [] })
  data: GenericObject;

  @Expose({ groups: [] })
  fdCustomerId: string;

  @Expose({ groups: [] })
  fdUserId: string;
}
