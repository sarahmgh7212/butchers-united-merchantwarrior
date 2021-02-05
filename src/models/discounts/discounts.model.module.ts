import { Module } from '@nestjs/common';
import { DiscountsModelService } from './discounts.model.service';
import { DiscountsModelController } from './discounts.model.controller';
import { PrismaModule } from 'src/core/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DiscountsModelController],
  providers: [DiscountsModelService],
})
export class DiscountsModelModule {}
