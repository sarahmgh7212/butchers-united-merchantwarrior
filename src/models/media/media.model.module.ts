import { Module } from '@nestjs/common';
import { MediaModelService } from './media.model.service';
import { MediaModelController } from './media.model.controller';

@Module({
  controllers: [MediaModelController],
  providers: [MediaModelService],
})
export class MediaModelModule {}
