import { Module } from '@nestjs/common';
import { CoreLogger } from './core.logger';

@Module({
  providers: [CoreLogger],
})
export class CoreLoggerModule {}
