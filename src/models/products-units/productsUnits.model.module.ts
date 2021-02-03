import { Module } from '@nestjs/common';
import { ProductsUnitsModelService } from './productsUnits.model.service';
import { ProductsUnitsModelController } from './productsUnits.model.controller';

@Module({
  controllers: [ProductsUnitsModelController],
  providers: [ProductsUnitsModelService],
})
export class ProductsUnitsModelModule {}
