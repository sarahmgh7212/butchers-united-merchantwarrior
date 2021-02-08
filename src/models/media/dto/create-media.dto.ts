import { MediaStatus, MediaType } from '@prisma/client';
import { IsIn, IsOptional, IsString, IsUUID } from 'class-validator';
export class CreateMediaDto {
  @IsIn(Object.values(MediaStatus))
  status: MediaStatus;

  @IsString()
  label: string;

  @IsIn(Object.values(MediaType))
  type: MediaType;

  @IsString()
  business_id: string;

  @IsString()
  productId: string | null;
}
