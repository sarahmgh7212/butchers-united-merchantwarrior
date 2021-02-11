import { Module } from '@nestjs/common';
import { CartsModelService } from './carts.model.service';
import { CartsModelController } from './carts.model.controller';
import { PrismaModule } from 'src/core/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CartsModelController],
  providers: [CartsModelService],
})
export class CartsModelModule {}
