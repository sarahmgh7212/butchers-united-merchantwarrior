import { Module } from '@nestjs/common';
import { PaymentsModelService } from './payments.model.service';
import { PaymentsModelController } from './payments.model.controller';

@Module({
  controllers: [PaymentsModelController],
  providers: [PaymentsModelService],
})
export class PaymentsModelModule {}
