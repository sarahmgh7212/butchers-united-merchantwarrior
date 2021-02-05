import { DiscountStatus } from '@prisma/client';
import { IsIn } from 'class-validator';

export class CreateDiscountDto {
  @IsIn(Object.values(DiscountStatus))
  status: DiscountStatus;
}
