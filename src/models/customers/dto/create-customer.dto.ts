import { CustomerableType } from '@prisma/client';
import { IsIn, IsJSON, IsString } from 'class-validator';
import { GenericObject } from 'src/types';

export class CreateCustomerDto {
  @IsString()
  customerable_id: string | null;

  @IsIn(Object.values(CustomerableType))
  customerable_type: CustomerableType;

  @IsJSON()
  tags: GenericObject | null;
}
