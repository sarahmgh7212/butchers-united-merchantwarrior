import { PartialType } from '@nestjs/mapped-types';
import { CreateInviteDto } from './create-invite.dto';
import { IsDate, IsEmail, IsIn, IsOptional, IsUUID } from 'class-validator';
import { InviteStatus } from '@prisma/client';

export class UpdateInviteDto extends PartialType(CreateInviteDto) {
  @IsUUID()
  id: string;

  @IsOptional()
  @IsIn(Object.values(InviteStatus))
  status: InviteStatus;

  @IsEmail()
  email: string;

  @IsUUID()
  inviterId: string;

  @IsDate()
  expiresAt: Date;

  @IsUUID()
  businessId: string;

  @IsOptional()
  @IsUUID()
  userId?: string;
}
