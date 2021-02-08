import { DiscountStatus } from '@prisma/client';
import { IsDate, IsIn, IsString } from 'class-validator';

export class CreateDiscountDto {
  @IsString()
  name: string;

  @IsDate()
  startAt: Date | null;

  @IsDate()
  endAt: Date | null;

  @IsIn(Object.values(DiscountStatus))
  status: DiscountStatus;
}
