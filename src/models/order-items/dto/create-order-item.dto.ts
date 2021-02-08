import { IsBoolean, IsJSON, IsNumber, IsString } from 'class-validator';
import { GenericObject } from 'src/types';

export class CreateOrderItemDto {
  @IsNumber()
  qty_ordered: number;

  @IsNumber()
  qty_received: number | null;

  @IsNumber()
  sell_ex: number;

  @IsNumber()
  sell_gst: number;

  @IsBoolean()
  is_estimate: boolean;

  @IsJSON()
  product_blob: GenericObject | null;

  @IsString()
  order_id: string;

  @IsString()
  fd_variant_id: string;
}
