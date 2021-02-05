import { PartialType } from '@nestjs/mapped-types';
import { MediaStatus } from '@prisma/client';
import { IsIn, IsOptional, IsString, IsUUID } from 'class-validator';
import { CreateMediaDto } from './create-media.dto';

export class UpdateMediaDto extends PartialType(CreateMediaDto) {
  @IsUUID()
  id: string;

  @IsIn(Object.values(MediaStatus))
  @IsOptional()
  status: MediaStatus;

  @IsString()
  @IsOptional()
  business_id: string;
}
