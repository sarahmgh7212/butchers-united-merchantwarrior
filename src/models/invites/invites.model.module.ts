import { Module } from '@nestjs/common';
import { InvitesModelService } from './invites.model.service';
import { InvitesModelController } from './invites.model.controller';

@Module({
  controllers: [InvitesModelController],
  providers: [InvitesModelService],
})
export class InvitesModelModule {}
