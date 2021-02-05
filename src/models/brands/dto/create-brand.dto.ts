import { BrandStatus } from '@prisma/client';
import { IsIn } from 'class-validator';

export class CreateBrandDto {
  @IsIn(Object.values(BrandStatus))
  status: BrandStatus;
}
