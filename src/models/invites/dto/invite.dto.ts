import { ApiProperty } from '@nestjs/swagger';
import { Invite } from '@prisma/client';
import { Expose } from 'class-transformer';

export class InviteDto implements Invite {
  @Expose({ groups: [] })
  id: string;

  @Expose({ groups: [] })
  first_opened_at: Date | null;

  @Expose({ groups: [] })
  status: 'ACTIVE' | 'USED' | 'CANCELLED';

  @Expose({ groups: [] })
  expires_at: Date;

  @Expose({ groups: [] })
  email: string;

  @Expose({ groups: [] })
  inviter_id: string;

  @Expose({ groups: [] })
  business_id: string;

  @Expose({ groups: [] })
  user_id: string | null;

  @Expose({ groups: [] })
  createdAt: Date;

  @Expose({ groups: [] })
  updatedAt: Date;

  @Expose({ groups: [] })
  deletedAt: Date | null;
}
