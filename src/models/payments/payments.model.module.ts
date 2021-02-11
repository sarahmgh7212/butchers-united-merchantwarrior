import { Module } from '@nestjs/common';
import { PaymentsModelService } from './payments.model.service';
import { PaymentsModelController } from './payments.model.controller';
import { PrismaModule } from 'src/core/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PaymentsModelController],
  providers: [PaymentsModelService],
})
export class PaymentsModelModule {}
