import { PartialType } from '@nestjs/mapped-types';
import { CreateVariantDto } from './create-variant.dto';
import {
  IsEmail,
  IsIn,
  IsJSON,
  IsOptional,
  IsString,
  IsUUID,
  IsNumber,
  IsDate,
} from 'class-validator';

import { Variant, VariantStatus } from '@prisma/client';
export class UpdateVariantDto extends PartialType(CreateVariantDto) {
  @IsUUID()
  id: string;

  @IsIn(Object.values(VariantStatus))
  status: VariantStatus;

  @IsString()
  description: string;

  @IsNumber()
  sellEx: number;

  @IsNumber()
  sellGst: number;

  @IsNumber()
  costEx: number;

  @IsNumber()
  costGst: number;

  @IsNumber()
  qtyAvailable: number;

  @IsNumber()
  qtySold: number;

  @IsDate()
  availableDate: Date;

  @IsNumber()
  invoiceToOrderRatio: number;

  @IsNumber()
  @IsOptional()
  stepQty: number;

  @IsNumber()
  @IsOptional()
  minimumQty: number;

  @IsString()
  product_id: string;

  @IsString()
  @IsOptional()
  discount_id: string;
}
