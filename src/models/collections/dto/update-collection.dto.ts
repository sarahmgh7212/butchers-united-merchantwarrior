import { PartialType } from '@nestjs/mapped-types';
import { CreateCollectionDto } from './create-collection.dto';
import { IsIn, IsOptional, IsString, IsUUID } from 'class-validator';
import { CollectionStatus } from '@prisma/client';
import { GenericObject } from 'src/types';

export class UpdateCollectionDto extends PartialType(CreateCollectionDto) {
  @IsUUID()
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsIn(Object.values(CollectionStatus))
  status: CollectionStatus;

  @IsOptional()
  @IsString()
  img_uri: string;

  @IsOptional()
  @IsString()
  logo_id: string;

  @IsOptional()
  @IsString()
  logo_uri: string;

  @IsOptional()
  tags: GenericObject | null;
}
