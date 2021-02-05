import { Module } from '@nestjs/common';
import { InvitesModelService } from './invites.model.service';
import { InvitesModelController } from './invites.model.controller';
import { PrismaModule } from 'src/core/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [InvitesModelController],
  providers: [InvitesModelService],
})
export class InvitesModelModule {}
