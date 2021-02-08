import { PartialType } from '@nestjs/swagger';
import { PaymentMethodStatus } from '@prisma/client';
import {
  IsEmail,
  IsIn,
  IsJSON,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { GenericObject } from 'src/types';
import { CreatePaymentMethodDto } from './create-payment-method.dto';

export class UpdatePaymentMethodDto extends PartialType(
  CreatePaymentMethodDto,
) {
  @IsUUID()
  id: string;

  @IsString()
  provider_type: string;

  @IsString()
  provider_id: string;

  @IsIn(Object.values(PaymentMethodStatus))
  status: PaymentMethodStatus;

  @IsJSON()
  data: GenericObject | null;
}
