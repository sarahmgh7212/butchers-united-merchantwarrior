import { Module } from '@nestjs/common';
import { PaymentMethodsModelService } from './payment-methods.model.service';
import { PaymentMethodsModelController } from './payment-methods.model.controller';
import { PrismaModule } from 'src/core/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PaymentMethodsModelController],
  providers: [PaymentMethodsModelService],
})
export class PaymentMethodsModelModule {}
