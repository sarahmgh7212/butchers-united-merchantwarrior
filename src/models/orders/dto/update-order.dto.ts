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
  orderRef: number;

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
  fdDeliveryLocationId: string;

  @IsString()
  @IsOptional()
  fdCustomerId: string;

  @IsString()
  @IsOptional()
  fdSupplierId: string;

  @IsString()
  @IsOptional()
  fdOrdererId: string;
}
