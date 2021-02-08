import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Invoice } from '@prisma/client';
import { ResourceController } from 'src/libs/resources/resource.controller';
import { InvoiceDto } from './dto/invoice.dto';
import { FilterInvoicesDto } from './dto/filter-invoices.dto';
import { InvoicesModelService } from './invoices.model.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

@ApiTags('Invoices')
@Controller('invoices')
export class InvoicesModelController extends ResourceController<
  Invoice,
  CreateInvoiceDto,
  UpdateInvoiceDto,
  InvoicesModelService
> {
  constructor(private readonly invoicesModelService: InvoicesModelService) {
    super(invoicesModelService);
  }

  @ApiQuery({
    name: 'filter',
    required: false,
    type: FilterInvoicesDto,
  })
  @ApiOkResponse({ type: [InvoiceDto] })
  @Get()
  findMany(@Query() query: FilterInvoicesDto): Promise<Invoice[]> {
    return super.findMany(query);
  }

  @ApiOkResponse({ type: InvoiceDto })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Invoice> {
    return super.findUnique(id);
  }

  @ApiCreatedResponse({ type: InvoiceDto })
  @Post()
  create(@Body() createInvoiceDto: CreateInvoiceDto): Promise<Invoice> {
    return super.create(createInvoiceDto);
  }

  @ApiOkResponse({ type: InvoiceDto })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInvoiceDto: UpdateInvoiceDto,
  ): Promise<Invoice> {
    return super.update(id, updateInvoiceDto);
  }

  @ApiOkResponse({ type: InvoiceDto })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<Invoice> {
    return super.delete(id);
  }
}
