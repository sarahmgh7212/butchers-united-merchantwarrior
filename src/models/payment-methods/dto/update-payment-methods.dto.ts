import { PartialType } from '@nestjs/mapped-types';
import { PaymentMethodStatus } from '@prisma/client';
import { IsIn, IsJSON, IsOptional, IsString, IsUUID } from 'class-validator';
import { GenericObject } from 'src/types';
import { CreatePaymentMethodDto } from './create-payment-method.dto';

export class UpdatePaymentMethodsDto extends PartialType(
  CreatePaymentMethodDto,
) {
  @IsUUID()
  id: string;

  @IsString()
  provider_type: string;

  @IsString()
  provider_id: string;

  @IsIn(Object.values(PaymentMethodStatus))
  @IsOptional()
  status: PaymentMethodStatus;

  @IsOptional()
  @IsJSON()
  data: GenericObject | null;
}
