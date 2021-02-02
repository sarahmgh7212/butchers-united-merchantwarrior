import { Module } from '@nestjs/common';
import { InvitationsModelService } from './invitationss.model.service';
import { InvitationsModelController } from './invitations.model.controller';

@Module({
  controllers: [InvitationsModelController],
  providers: [InvitationsModelService],
})
export class InvitationsModelModule {}
