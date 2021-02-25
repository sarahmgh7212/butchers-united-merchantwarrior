import { Module } from '@nestjs/common';
import { UsersModelModule } from 'src/models/users/users.model.module';
import { AuthService } from './auth.service';

@Module({
  imports: [UsersModelModule],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
