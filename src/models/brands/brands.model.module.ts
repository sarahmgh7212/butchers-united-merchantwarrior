import { Module } from '@nestjs/common';
import { BrandsModelService } from './brands.model.service';
import { BrandsModelController } from './brands.model.controller';

@Module({
  controllers: [BrandsModelController],
  providers: [BrandsModelService],
})
export class BrandsModelModule {}
