import { PartialType } from '@nestjs/swagger';

import { IsJSON, IsString, IsUUID } from 'class-validator';
import { GenericObject } from 'src/types';
import { CreateCartDto } from './create-cart.dto';

export class UpdateCartDto extends PartialType(CreateCartDto) {
  @IsUUID()
  id: string;

  @IsJSON()
  data: GenericObject;

  @IsString()
  fdCustomerId: string;

  @IsString()
  fdUserId: string;
}
