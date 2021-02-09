import { PartialType } from '@nestjs/swagger';
import { CustomerableType } from '@prisma/client';
import { IsIn, IsJSON, IsString, IsUUID } from 'class-validator';
import { GenericObject } from 'src/types';
import { CreateCustomerDto } from './create-customer.dto';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
  @IsUUID()
  id: string;

  @IsString()
  customerableId: string | null;

  @IsIn(Object.values(CustomerableType))
  customerableType: CustomerableType;

  @IsJSON()
  tags: GenericObject | null;
}
