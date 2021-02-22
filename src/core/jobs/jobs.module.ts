import { DiscoveryModule } from '@golevelup/nestjs-discovery';
import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';

import { JobsService } from './jobs.service';

@Module({
  imports: [DiscoveryModule, PrismaModule],
  providers: [JobsService],
  exports: [JobsService],
})
export class JobsModule {}
