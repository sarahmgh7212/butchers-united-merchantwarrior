import { Module } from '@nestjs/common';
import { AvailabilityRulesModelService } from './availability-rules.model.service';
import { AvailabilityRulesModelController } from './availability-rules.model.controller';
import { PrismaModule } from 'src/core/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AvailabilityRulesModelController],
  providers: [AvailabilityRulesModelService],
})
export class AvailabilityRulesModelModule {}
