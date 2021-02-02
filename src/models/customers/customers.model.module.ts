import { Module } from '@nestjs/common';
import { CustomersModelService } from './customers.model.service';
import { CustomersModelController } from './customers.model.controller';

@Module({
  controllers: [CustomersModelController],
  providers: [CustomersModelService],
})
export class CustomersModelModule {}
