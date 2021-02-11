import { IsNumber, IsString } from 'class-validator';

export class CreateInvoiceDto {
  @IsNumber()
  invoiceRef: number;

  @IsString()
  generatedFileUrl: string;

  @IsString()
  orderId: string;
}
