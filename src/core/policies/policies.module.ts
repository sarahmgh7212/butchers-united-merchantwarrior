import { DiscoveryModule } from '@golevelup/nestjs-discovery';
import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';

import { PoliciesService } from './policies.service';

@Module({
  imports: [DiscoveryModule, PrismaModule, AuthModule],
  providers: [PoliciesService],
  exports: [PoliciesService],
})
export class PoliciesModule {}
