import { MediaStatus } from '@prisma/client';
import { IsIn, IsOptional, IsString, IsUUID } from 'class-validator';
export class CreateMediaDto {
  @IsUUID()
  id: string;

  @IsIn(Object.values(MediaStatus))
  @IsOptional()
  status: MediaStatus;

  @IsString()
  @IsOptional()
  business_id: string;
}
