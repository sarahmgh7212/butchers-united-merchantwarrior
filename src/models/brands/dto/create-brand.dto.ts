import { BrandStatus } from '@prisma/client';
import { IsIn, IsString } from 'class-validator';

export class CreateBrandDto {
  @IsIn(Object.values(BrandStatus))
  status: BrandStatus;

  @IsString()
  name: string;

  @IsString()
  logo_id: string;

  @IsString()
  supplier_id: string | null;
}
