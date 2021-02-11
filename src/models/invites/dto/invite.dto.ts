import { ApiProperty } from '@nestjs/swagger';
import { Invite, InviteStatus } from '@prisma/client';
import { Expose } from 'class-transformer';

export class InviteDto implements Invite {
  @Expose({ groups: [] })
  id: string;

  @Expose({ groups: [] })
  firstOpenedAt: Date | null;

  @Expose({ groups: [] })
  status: InviteStatus;

  @Expose({ groups: [] })
  expiresAt: Date;

  @Expose({ groups: [] })
  email: string;

  @Expose({ groups: [] })
  consumedAt: Date | null;

  @Expose({ groups: [] })
  inviterId: string;

  @Expose({ groups: [] })
  businessId: string;

  @Expose({ groups: [] })
  userId: string | null;

  @Expose({ groups: [] })
  createdAt: Date;

  @Expose({ groups: [] })
  updatedAt: Date;

  @Expose({ groups: [] })
  deletedAt: Date | null;
}
