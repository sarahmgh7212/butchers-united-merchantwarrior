import { Module } from '@nestjs/common';
import { VariantsModelService } from './variants.model.service';
import { VariantsModelController } from './variants.model.controller';

@Module({
  controllers: [VariantsModelController],
  providers: [VariantsModelService],
})
export class VariantsModelModule {}
