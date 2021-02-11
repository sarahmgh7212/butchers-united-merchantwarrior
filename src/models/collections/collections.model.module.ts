import { Module } from '@nestjs/common';
import { CollectionsModelService } from './collections.model.service';
import { CollectionsModelController } from './collections.model.controller';
import { PrismaModule } from 'src/core/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CollectionsModelController],
  providers: [CollectionsModelService],
})
export class CollectionsModelModule {}
