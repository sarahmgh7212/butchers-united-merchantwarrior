import { PartialType } from '@nestjs/mapped-types';
import { ProductUnitStatus } from '@prisma/client';
import { IsIn, IsString } from 'class-validator';
import { CreateProductUnitDto } from './create-product-unit.dto';

export class UpdateProductUnitDto extends PartialType(CreateProductUnitDto) {
  @IsString()
  singular: string;

  @IsString()
  abbreviation: string;

  @IsIn(Object.values(ProductUnitStatus))
  @IsString()
  status: ProductUnitStatus;
}
