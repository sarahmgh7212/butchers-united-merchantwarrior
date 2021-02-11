import { Module } from '@nestjs/common';
import { VariantsModelService } from './variants.model.service';
import { VariantsModelController } from './variants.model.controller';
import { PrismaModule } from 'src/core/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [VariantsModelController],
  providers: [VariantsModelService],
})
export class VariantsModelModule {}
