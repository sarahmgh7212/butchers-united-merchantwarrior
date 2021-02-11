import { Module } from '@nestjs/common';
import { MediaModelService } from './media.model.service';
import { MediaModelController } from './media.model.controller';
import { PrismaModule } from 'src/core/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MediaModelController],
  providers: [MediaModelService],
})
export class MediaModelModule {}
