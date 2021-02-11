import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { ProductStatus } from '@prisma/client';
import { IsBoolean, IsIn, IsJSON, IsString } from 'class-validator';
import { GenericObject } from 'src/types';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  externalReference: string | null;

  @IsIn(Object.values(ProductStatus))
  status: ProductStatus;

  @IsBoolean()
  isEstimatedQty: boolean | null;

  @IsString()
  tags: GenericObject | null;

  @IsString()
  orderUnitsId: string;

  @IsString()
  invoiceUnitsId: string;

  @IsString()
  fdSupplierId: string;

  @IsString()
  fdManufacturerId: string | null;

  @IsString()
  brandId: string | null;

  @IsString()
  businessId: string | null;

  @IsString()
  productUnitId: string | null;

  @IsString()
  mediaId: string | null;
}
