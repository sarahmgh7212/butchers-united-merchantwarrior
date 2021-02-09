import { InviteStatus } from '@prisma/client';
import { IsDate, IsEmail, IsIn, IsOptional, IsUUID } from 'class-validator';

export class CreateInviteDto {
  @IsOptional()
  @IsIn(Object.values(InviteStatus))
  status: InviteStatus;

  @IsEmail()
  email: string;

  @IsDate()
  consumedAt: Date | null;

  @IsUUID()
  inviterId: string;

  @IsUUID()
  businessId: string;

  @IsOptional()
  @IsUUID()
  userId: string;
}
