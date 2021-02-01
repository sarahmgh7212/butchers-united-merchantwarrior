import { Module } from '@nestjs/common';
import { ProductsModelService } from './products.model.service';
import { ProductsModelController } from './products.model.controller';

@Module({
  controllers: [ProductsModelController],
  providers: [ProductsModelService],
})
export class ProductsModelModule {}
