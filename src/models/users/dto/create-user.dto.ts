import { UserStatus } from '@prisma/client';

import { IsEmail, IsIn, IsJSON, IsOptional, IsString } from 'class-validator';
import { GenericObject } from 'src/types';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  mobile_number: string | null;

  @IsString()
  @IsOptional()
  notifications_provider_id: string | null;

  @IsString()
  @IsOptional()
  auth_provider_id: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsJSON()
  @IsOptional()
  notification_settings: GenericObject;

  @IsOptional()
  @IsIn(Object.values(UserStatus))
  status: UserStatus;

  @IsOptional()
  @IsJSON()
  tags: GenericObject | null;

  @IsOptional()
  @IsString()
  notes: string | null;
}
