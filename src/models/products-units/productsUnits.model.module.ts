import { Module } from '@nestjs/common';
import { ProductsUnitsModelService } from './productsUnits.model.service';
import { ProductsUnitsModelController } from './productsUnits.model.controller';
import { PrismaModule } from 'src/core/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProductsUnitsModelController],
  providers: [ProductsUnitsModelService],
})
export class ProductsUnitsModelModule {}
