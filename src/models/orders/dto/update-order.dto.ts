import { PartialType } from '@nestjs/swagger';
import { CreateOrderDto } from './create-order.dto';
import {
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @IsUUID()
  id: string;

  @IsNumber()
  order_ref: number;

  @IsDate()
  completedAt: Date | null;

  @IsDate()
  @IsOptional()
  shippedAt: Date | null;

  @IsDate()
  @IsOptional()
  packedAt: Date | null;

  @IsDate()
  @IsOptional()
  processedAt: Date | null;

  @IsDate()
  @IsOptional()
  paidAt: Date | null;

  @IsString()
  @IsOptional()
  fd_customer_id: string;

  @IsString()
  @IsOptional()
  fd_supplier_id: string;

  @IsString()
  @IsOptional()
  fd_orderer_id: string;
}
