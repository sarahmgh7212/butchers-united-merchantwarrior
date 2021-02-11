import { UserStatus } from '@prisma/client';

import {
  IsDate,
  IsEmail,
  IsIn,
  IsJSON,
  IsOptional,
  IsString,
} from 'class-validator';
import { GenericObject } from 'src/types';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  mobileNumber: string | null;

  @IsString()
  notificationsProviderId: string | null;

  @IsString()
  authProviderId: string;

  @IsString()
  email: string;

  @IsJSON()
  notificationSettings: GenericObject;

  @IsIn(Object.values(UserStatus))
  status: UserStatus;

  @IsDate()
  emailVerifiedAt: Date | null;

  @IsJSON()
  tags: GenericObject | null;

  @IsString()
  notes: string | null;
}
