import {
  IsDate,
  IsEmail,
  IsIn,
  IsJSON,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  order_ref: number;

  @IsDate()
  completedAt: Date | null;

  @IsDate()
  shippedAt: Date | null;

  @IsDate()
  packedAt: Date | null;

  @IsDate()
  processedAt: Date | null;

  @IsDate()
  paidAt: Date | null;

  @IsString()
  fd_customer_id: string;

  @IsString()
  fd_supplier_id: string;

  @IsString()
  fd_orderer_id: string;
}
