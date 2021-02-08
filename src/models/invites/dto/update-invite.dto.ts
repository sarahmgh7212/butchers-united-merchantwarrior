import { PartialType } from '@nestjs/mapped-types';
import { CreateInviteDto } from './create-invite.dto';
import { IsDate, IsEmail, IsIn, IsOptional, IsUUID } from 'class-validator';

export class UpdateInviteDto extends PartialType(CreateInviteDto) {
  @IsUUID()
  id: string;

  @IsOptional()
  @IsIn(['ACTIVE', 'USED', 'CANCELLED'])
  status?: 'ACTIVE' | 'USED' | 'CANCELLED';

  @IsEmail()
  email: string;

  @IsUUID()
  inviter_id: string;

  @IsDate()
  expires_at: Date;

  @IsUUID()
  business_id: string;

  @IsOptional()
  @IsUUID()
  user_id?: string;
}
