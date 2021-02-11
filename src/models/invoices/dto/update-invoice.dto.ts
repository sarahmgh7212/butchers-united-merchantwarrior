import { PartialType } from '@nestjs/swagger';

import { IsNumber, IsString, IsUUID } from 'class-validator';
import { CreateInvoiceDto } from './create-invoice.dto';

export class UpdateInvoiceDto extends PartialType(CreateInvoiceDto) {
  @IsUUID()
  id: string;

  @IsNumber()
  invoiceRef: number;

  @IsString()
  generatedFileUrl: string;

  @IsString()
  orderId: string;
}
