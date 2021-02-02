import { Module } from '@nestjs/common';
import { UsersModelService } from './users.model.service';
import { UsersModelController } from './users.model.controller';

@Module({
  controllers: [UsersModelController],
  providers: [UsersModelService],
})
export class UsersModelModule {}
