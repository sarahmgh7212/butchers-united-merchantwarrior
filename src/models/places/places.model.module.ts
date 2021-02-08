import { Module } from '@nestjs/common';
import { PlacesModelService } from './places.model.service';
import { PlacesModelController } from './places.model.controller';
import { PrismaModule } from 'src/core/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PlacesModelController],
  providers: [PlacesModelService],
})
export class PlacesModelModule {}
