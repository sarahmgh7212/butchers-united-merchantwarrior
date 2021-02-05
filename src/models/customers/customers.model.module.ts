import { Module } from '@nestjs/common';
import { CustomersModelService } from './customers.model.service';
import { CustomersModelController } from './customers.model.controller';
import { PrismaModule } from 'src/core/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CustomersModelController],
  providers: [CustomersModelService],
})
export class CustomersModelModule {}
