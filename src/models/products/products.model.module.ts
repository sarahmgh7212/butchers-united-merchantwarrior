import { Module } from '@nestjs/common';
import { ProductsModelService } from './products.model.service';
import { ProductsModelController } from './products.model.controller';
import { PrismaModule } from 'src/core/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProductsModelController],
  providers: [ProductsModelService],
})
export class ProductsModelModule {}
