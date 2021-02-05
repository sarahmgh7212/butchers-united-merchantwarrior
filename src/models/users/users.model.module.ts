import { Module } from '@nestjs/common';
import { UsersModelService } from './users.model.service';
import { UsersModelController } from './users.model.controller';
import { PrismaModule } from 'src/core/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UsersModelController],
  providers: [UsersModelService],
})
export class UsersModelModule {}
