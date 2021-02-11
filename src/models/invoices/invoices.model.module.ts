import { Module } from '@nestjs/common';
import { InvoicesModelService } from './invoices.model.service';
import { InvoicesModelController } from './invoices.model.controller';
import { PrismaModule } from 'src/core/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [InvoicesModelController],
  providers: [InvoicesModelService],
})
export class InvoicesModelModule {}
