import { PaymentMethodStatus } from '@prisma/client';

import { IsEmail, IsIn, IsJSON, IsOptional, IsString } from 'class-validator';
import { GenericObject } from 'src/types';

export class CreatePaymentMethodDto {
  @IsString()
  provider_type: string;

  @IsString()
  provider_id: string;

  @IsIn(Object.values(PaymentMethodStatus))
  status: PaymentMethodStatus;

  @IsJSON()
  data: GenericObject | null;
}
