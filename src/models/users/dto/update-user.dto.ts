import { PartialType } from '@nestjs/swagger';
import { UserStatus } from '@prisma/client';
import {
  IsDate,
  IsEmail,
  IsIn,
  IsJSON,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { GenericObject } from 'src/types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsUUID()
  id: string;

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
