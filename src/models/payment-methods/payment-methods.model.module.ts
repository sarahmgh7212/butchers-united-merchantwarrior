import { Module } from '@nestjs/common';
import { PaymentMethodsModelService } from './payment-methods.model.service'
import { PaymentMethodsModelController } from './payment-methods.model.controller';

@Module({
  controllers: [PaymentMethodsModelController],
  providers: [PaymentMethodsModelService],
})
export class PaymentMethodsModelModule {}
