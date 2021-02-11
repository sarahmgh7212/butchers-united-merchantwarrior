import { Module } from '@nestjs/common';
import { PaymentMethodModelService } from './payment-method.model.service';
import { PaymentMethodModelController } from './payment-method.model.controller';
import { PrismaModule } from 'src/core/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PaymentMethodModelController],
  providers: [PaymentMethodModelService],
})
export class PaymentMethodModelModule {}
