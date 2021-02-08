import { PartialType } from '@nestjs/mapped-types';
import { BrandStatus } from '@prisma/client';
import { IsIn, IsString } from 'class-validator';
import { CreateBrandDto } from './create-brand.dto';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {
  @IsIn(Object.values(BrandStatus))
  status: BrandStatus;

  @IsString()
  name: string;

  @IsString()
  logo_id: string;

  @IsString()
  supplier_id: string | null;
}
