import { Decimal } from '@prisma/client/runtime';
import {
  IsBoolean,
  IsDecimal,
  IsJSON,
  IsNumber,
  IsString,
} from 'class-validator';
import { GenericObject } from 'src/types';

export class CreateOrderItemDto {
  @IsNumber()
  qtyOrdered: number;

  @IsNumber()
  qtyReceived: number | null;

  @IsDecimal()
  sellEx: Decimal;

  @IsDecimal()
  sellGst: Decimal;

  @IsBoolean()
  isestimate: boolean;

  @IsJSON()
  productBlob: GenericObject | null;

  @IsString()
  orderId: string;

  @IsString()
  fdVariantId: string;
}
