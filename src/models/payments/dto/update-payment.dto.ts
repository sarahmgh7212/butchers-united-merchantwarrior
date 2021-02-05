import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentDto } from './create-payment.dto';
import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdatePaymentDto extends PartialType(CreatePaymentDto) {
  @IsUUID()
  id: string;

  @IsNumber()
  receipt_number: number | null;

  @IsString()
  @IsOptional()
  notes: string | null;

  @IsNumber()
  amount: number | null;
}
