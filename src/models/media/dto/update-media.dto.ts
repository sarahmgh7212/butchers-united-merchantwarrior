import { PartialType } from '@nestjs/mapped-types';
import { MediaStatus, MediaType } from '@prisma/client';
import { IsIn, IsOptional, IsString, IsUUID } from 'class-validator';
import { CreateMediaDto } from './create-media.dto';

export class UpdateMediaDto extends PartialType(CreateMediaDto) {
  @IsUUID()
  id: string;

  @IsIn(Object.values(MediaStatus))
  status: MediaStatus;

  @IsString()
  label: string;

  @IsIn(Object.values(MediaType))
  type: MediaType;

  @IsString()
  businessId: string;

  @IsString()
  productId: string | null;
}
