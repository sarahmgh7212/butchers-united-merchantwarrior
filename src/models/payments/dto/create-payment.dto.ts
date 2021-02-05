import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePaymentDto {
  @IsNumber()
  receipt_number: number | null;

  @IsString()
  @IsOptional()
  notes: string | null;

  @IsNumber()
  amount: number | null;
}
