import { ProductUnitStatus } from '@prisma/client';
import { IsIn, IsString } from 'class-validator';

export class CreateProductUnitDto {
  @IsString()
  singular: string;

  @IsString()
  abbreviation: string;

  @IsIn(Object.values(ProductUnitStatus))
  @IsString()
  status: ProductUnitStatus;
}
