import { PartialType } from '@nestjs/mapped-types';
import { BrandStatus } from '@prisma/client';
import { IsIn } from 'class-validator';
import { CreateBrandDto } from './create-brand.dto';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {
  @IsIn(Object.values(BrandStatus))
  status: BrandStatus;
}
