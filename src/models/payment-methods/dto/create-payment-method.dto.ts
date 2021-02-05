import { PaymentMethodStatus } from '@prisma/client';
import { IsIn, IsJSON, IsOptional, IsString, IsUUID } from 'class-validator';
import { GenericObject } from 'src/types';
export class CreatePaymentMethodDto {
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
