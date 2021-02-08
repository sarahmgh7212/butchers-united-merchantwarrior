import { Module } from '@nestjs/common';
import { OrdersModelService } from './orders.model.service';
import { OrdersModelController } from './orders.model.controller';
import { PrismaModule } from 'src/core/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [OrdersModelController],
  providers: [OrdersModelService],
})
export class OrdersModelModule {}
