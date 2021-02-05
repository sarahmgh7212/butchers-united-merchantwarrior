import { CollectionStatus } from '@prisma/client';
import { IsIn, IsJSON, IsOptional, IsString } from 'class-validator';
import { GenericObject } from 'src/types';

export class CreateCollectionDto {
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
  logo_uri: string;

  @IsOptional()
  @IsJSON()
  tags: GenericObject | null;
}
