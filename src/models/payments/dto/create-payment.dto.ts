import { TransactionType } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';
import {
  IsDate,
  IsDecimal,
  IsIn,
  IsJSON,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { GenericObject } from 'src/types';

export class CreatePaymentDto {
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
