import { PartialType } from '@nestjs/mapped-types';
import { DiscountStatus } from '@prisma/client';
import { IsDate, IsIn, IsString, IsUUID } from 'class-validator';
import { CreateDiscountDto } from './create-discount.dto';

export class UpdateDiscountDto extends PartialType(CreateDiscountDto) {
  @IsUUID()
  id: string;

  @IsString()
  name: string;

  @IsDate()
  startAt: Date | null;

  @IsDate()
  endAt: Date | null;

  @IsIn(Object.values(DiscountStatus))
  status: DiscountStatus;
}
