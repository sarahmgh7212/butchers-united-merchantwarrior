import { PartialType } from '@nestjs/swagger';

import { CreateOrderItemDto } from './create-order-item.dto';
import {
  IsBoolean,
  IsJSON,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { GenericObject } from 'src/types';

export class UpdateOrderItemDto extends PartialType(CreateOrderItemDto) {
  id: string;

  @IsNumber()
  @IsOptional()
  qty_ordered: number;

  @IsNumber()
  @IsOptional()
  qty_received: number | null;

  @IsNumber()
  @IsOptional()
  sell_ex: number;

  @IsNumber()
  @IsOptional()
  sell_gst: number;

  @IsBoolean()
  @IsOptional()
  is_estimate: boolean;

  @IsJSON()
  @IsOptional()
  product_blob: GenericObject | null;

  @IsString()
  order_id: string;

  @IsString()
  fd_variant_id: string;
}
