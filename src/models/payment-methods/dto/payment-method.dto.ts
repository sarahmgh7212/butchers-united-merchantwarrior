import {
  PaymentMethod,
  PaymentMethodStatus,
  PaymentMethodType,
} from '@prisma/client';
import { Expose } from 'class-transformer';
import { GenericObject } from 'src/types';

export class PaymentMethodDto implements PaymentMethod {
  @Expose({ groups: [] })
  id: string;
  @Expose({ groups: [] })
  type: PaymentMethodType;

  @Expose({ groups: [] })
  provider_type: string;

  @Expose({ groups: [] })
  provider_id: string;

  @Expose({ groups: [] })
  status: PaymentMethodStatus;

  @Expose({ groups: [] })
  data: GenericObject | null;
  @Expose({ groups: [] })
  fdCustomerId: string;

  @Expose({ groups: [] })
  createdAt: Date;

  @Expose({ groups: [] })
  updatedAt: Date;

  @Expose({ groups: [] })
  deletedAt: Date | null;
}
