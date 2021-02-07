import { Module } from '@nestjs/common';
import { MerchantWarriorService } from './merchant-warrior.service';

@Module({
  providers: [MerchantWarriorService],
})
export class MerchantWarriorModule {}
