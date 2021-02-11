import { Place } from '@prisma/client';

import { IsEmail, IsIn, IsJSON, IsOptional, IsString } from 'class-validator';
import { GenericObject } from 'src/types';

export class CreatePlaceDto {
  @IsString()
  countryCode: string;

  @IsString()
  stateCode: string;

  @IsString()
  suburb: string;

  @IsString()
  street: string;

  @IsString()
  streetNumber: string;

  @IsString()
  postcode: string;

  @IsString()
  providerId: string | null;

  @IsJSON()
  data: GenericObject | null;
}
