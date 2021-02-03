import { Module } from '@nestjs/common';
import { DiscountsModelService } from './discounts.model.service';
import { DiscountsModelController } from './discounts.model.controller';

@Module({
  controllers: [DiscountsModelController],
  providers: [DiscountsModelService],
})
export class DiscountsModelModule {}
