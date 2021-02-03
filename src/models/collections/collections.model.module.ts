import { Module } from '@nestjs/common';
import { CollectionsModelService } from './collections.model.service';
import { CollectionsModelController } from './collections.model.controller';

@Module({
  controllers: [CollectionsModelController],
  providers: [CollectionsModelService],
})
export class CollectionsModelModule {}
