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

export class UpdatePlaceDto extends PartialType(CreatePlaceDto) {}
