import { Invoice } from '@prisma/client';
import { Expose } from 'class-transformer';

export class InvoiceDto implements Invoice {
  @Expose({ groups: [] })
  id: string;

  @Expose({ groups: [] })
  invoiceRef: number;

  @Expose({ groups: [] })
  generatedFileUrl: string;

  @Expose({ groups: [] })
  orderId: string;

  @Expose({ groups: [] })
  createdAt: Date;

  @Expose({ groups: [] })
  updatedAt: Date;

  @Expose({ groups: [] })
  deletedAt: Date | null;
}
