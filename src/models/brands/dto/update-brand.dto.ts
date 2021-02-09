import { PartialType } from '@nestjs/mapped-types';
import { BrandStatus } from '@prisma/client';
import { IsIn, IsString, IsUUID } from 'class-validator';
import { CreateBrandDto } from './create-brand.dto';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {
  @IsUUID()
  id: string;

  @IsIn(Object.values(BrandStatus))
  status: BrandStatus;

  @IsString()
  name: string;

  @IsString()
  logoId: string;

  @IsString()
  supplierId: string | null;
}
