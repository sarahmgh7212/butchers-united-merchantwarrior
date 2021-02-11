import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentDto } from './create-payment.dto';
import {
  IsDate,
  IsDecimal,
  IsIn,
  IsJSON,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { Decimal } from '@prisma/client/runtime';
import { TransactionType } from '@prisma/client';
import { GenericObject } from 'src/types';

export class UpdatePaymentDto extends PartialType(CreatePaymentDto) {
  @IsUUID()
  id: string;

  @IsNumber()
  receiptNumber: number | null;

  @IsString()
  notes: string | null;

  @IsDecimal()
  amount: Decimal | null;

  @IsIn(Object.values(TransactionType))
  transactionType: TransactionType;

  @IsDate()
  completedAt: Date | null;

  @IsDate()
  failedAt: Date | null;

  @IsString()
  providerId: string | null;

  @IsJSON()
  data: GenericObject | null;

  @IsString()
  paymentMethodId: string;

  @IsString()
  fdOrderId: string;
}
