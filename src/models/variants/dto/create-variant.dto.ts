import { Variant, VariantStatus } from '@prisma/client';
import { Expose } from 'class-transformer';
import { IsDate, IsIn, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateVariantDto {
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
