import { Module } from '@nestjs/common';
import { ProductUnitModelService } from './productUnit.model.service';
import { ProductUnitModelController } from './productUnit.model.controller';
import { PrismaModule } from 'src/core/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProductUnitModelController],
  providers: [ProductUnitModelService],
})
export class ProductUnitModelModule {}
