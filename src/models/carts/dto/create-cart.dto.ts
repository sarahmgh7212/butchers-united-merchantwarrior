import { IsEmail, IsIn, IsJSON, IsOptional, IsString } from 'class-validator';
import { GenericObject } from 'src/types';

export class CreateCartDto {
  @IsJSON()
  data: GenericObject;

  @IsString()
  fdCustomerId: string;

  @IsString()
  fdUserId: string;
}
