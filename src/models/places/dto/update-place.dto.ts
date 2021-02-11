import { PartialType } from '@nestjs/swagger';

import {
  IsEmail,
  IsIn,
  IsJSON,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { GenericObject } from 'src/types';
import { CreatePlaceDto } from './create-place.dto';

export class UpdatePlaceDto extends PartialType(CreatePlaceDto) {
  @IsUUID()
  id: string;

  @IsOptional()
  @IsString()
  countryCode: string;

  @IsOptional()
  @IsString()
  stateCode: string;

  @IsOptional()
  @IsString()
  suburb: string;

  @IsOptional()
  @IsString()
  street: string;

  @IsOptional()
  @IsString()
  streetNumber: string;

  @IsOptional()
  @IsString()
  postcode: string;

  @IsOptional()
  @IsString()
  providerId: string | null;

  @IsOptional()
  @IsJSON()
  data: GenericObject | null;
}
