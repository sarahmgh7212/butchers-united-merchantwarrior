import { Module } from '@nestjs/common';
import { BrandsModelService } from './brands.model.service';
import { BrandsModelController } from './brands.model.controller';
import { PrismaModule } from 'src/core/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BrandsModelController],
  providers: [BrandsModelService],
})
export class BrandsModelModule {}
