import { PartialType } from '@nestjs/mapped-types';
import { CreateProductsUnitsDto } from './create-products-units.dto';

export class UpdateProductsUnitsDto extends PartialType(
  CreateProductsUnitsDto,
) {}
