import { User, UserStatus } from '@prisma/client';
import { Expose } from 'class-transformer';
import { GenericObject } from 'src/types';

export class UserDto implements User {
  @Expose({ groups: [] })
  id: string;

  @Expose({ groups: [] })
  name: string;

  @Expose({ groups: [] })
  mobileNumber: string | null;

  @Expose({ groups: [] })
  notificationsProviderId: string | null;

  @Expose({ groups: [] })
  authProviderId: string;

  @Expose({ groups: [] })
  email: string;

  @Expose({ groups: [] })
  notificationSettings: GenericObject;

  @Expose({ groups: [] })
  status: UserStatus;

  @Expose({ groups: [] })
  emailVerifiedAt: Date | null;

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
