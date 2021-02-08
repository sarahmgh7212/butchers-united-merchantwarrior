import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { ProductStatus } from '@prisma/client';
import { IsBoolean, IsIn, IsJSON, IsString } from 'class-validator';
import { GenericObject } from 'src/types';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  external_reference: string | null;

  @IsIn(Object.values(ProductStatus))
  status: ProductStatus;

  @IsString()
  order_units_id: string;

  @IsString()
  invoice_units_id: string;

  @IsBoolean()
  is_estimated_qty: boolean | null;

  @IsString()
  fd_supplier_id: string;

  @IsString()
  fd_manufacturer_id: string | null;

  @IsString()
  brand_id: string | null;

  @IsJSON()
  tags: GenericObject | null;

  @IsString()
  businessId: string | null;

  @IsString()
  productUnitId: string | null;

  @IsString()
  mediaId: string | null;
}
