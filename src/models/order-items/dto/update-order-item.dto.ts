import { PartialType } from '@nestjs/swagger';

import { CreateOrderItemDto } from './create-order-item.dto';
import {
  IsBoolean,
  IsDecimal,
  IsJSON,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { GenericObject } from 'src/types';
import { Decimal } from '@prisma/client/runtime';

export class UpdateOrderItemDto extends PartialType(CreateOrderItemDto) {
  id: string;

  @IsOptional()
  @IsNumber()
  qtyOrdered: number;

  @IsOptional()
  @IsNumber()
  qtyReceived: number | null;

  @IsOptional()
  @IsDecimal()
  sellEx: Decimal;

  @IsOptional()
  @IsDecimal()
  sellGst: Decimal;

  @IsOptional()
  @IsBoolean()
  isestimate: boolean;

  @IsOptional()
  @IsJSON()
  productBlob: GenericObject | null;

  @IsOptional()
  @IsString()
  orderId: string;

  @IsOptional()
  @IsString()
  fdVariantId: string;
}
