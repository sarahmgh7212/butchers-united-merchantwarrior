import { User, UserStatus } from '@prisma/client';
import { Expose } from 'class-transformer';
import { GenericObject } from 'src/types';

export class UserDto implements User {
  @Expose({ groups: [] })
  id: string;

  @Expose({ groups: [] })
  name: string;

  @Expose({ groups: [] })
  mobile_number: string | null;

  @Expose({ groups: [] })
  notifications_provider_id: string | null;

  @Expose({ groups: [] })
  auth_provider_id: string;

  @Expose({ groups: [] })
  email: string;

  @Expose({ groups: [] })
  notification_settings: GenericObject;

  @Expose({ groups: [] })
  status: UserStatus;

  @Expose({ groups: [] })
  email_verified_at: Date | null;

  @Expose({ groups: [] })
  tags: GenericObject | null;

  @Expose({ groups: [] })
  notes: string | null;

  @Expose({ groups: [] })
  createdAt: Date;

  @Expose({ groups: [] })
  updatedAt: Date;

  @Expose({ groups: [] })
  deletedAt: Date | null;
}
