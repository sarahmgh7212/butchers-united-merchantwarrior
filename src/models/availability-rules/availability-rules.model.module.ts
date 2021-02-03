import { Module } from '@nestjs/common';
import { AvailabilityRulesModelService } from './availability-rules.model.service';
import { AvailabilityRulesModelController } from './availability-rules.model.controller';

@Module({
  controllers: [AvailabilityRulesModelController],
  providers: [AvailabilityRulesModelService],
})
export class AvailabilityRulesModelModule {}
