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
  orderRef: number;

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
  fdDeliveryLocationId: string;

  @IsString()
  fdCustomerId: string;

  @IsString()
  fdSupplierId: string;

  @IsString()
  fdOrdererId: string;
}
