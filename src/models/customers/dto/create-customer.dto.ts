import { CustomerableType } from '@prisma/client';
import { IsIn, IsJSON, IsString } from 'class-validator';
import { GenericObject } from 'src/types';

export class CreateCustomerDto {
  @IsString()
  customerableId: string | null;

  @IsIn(Object.values(CustomerableType))
  customerableType: CustomerableType;

  @IsJSON()
  tags: GenericObject | null;
}
