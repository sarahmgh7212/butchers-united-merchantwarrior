import { IsEmail, IsIn, IsOptional, IsUUID } from 'class-validator';

export class CreateInviteDto {
  @IsOptional()
  @IsIn(['ACTIVE', 'USED', 'CANCELLED'])
  status?: 'ACTIVE' | 'USED' | 'CANCELLED';

  @IsEmail()
  email: string;

  @IsUUID()
  inviter_id: string;

  @IsUUID()
  business_id: string;

  @IsOptional()
  @IsUUID()
  user_id?: string;
}
