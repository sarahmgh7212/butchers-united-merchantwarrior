import { Module } from '@nestjs/common';
import { OrderItemsModelService } from './order-items.model.service';
import { OrderItemsModelController } from './order-items.model.controller';
import { PrismaModule } from 'src/core/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [OrderItemsModelController],
  providers: [OrderItemsModelService],
})
export class OrderItemsModelModule {}
