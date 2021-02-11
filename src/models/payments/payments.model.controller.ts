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
import { Payment } from '@prisma/client';
import { ResourceController } from 'src/libs/resources/resource.controller';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { FilterPaymentsDto } from './dto/filter-payments.dto';

import { PaymentsModelService } from './payments.model.service';
import { PaymentDto } from './dto/payment.dto';

@ApiTags('Payments')
@Controller('payments')
export class PaymentsModelController extends ResourceController<
  Payment,
  CreatePaymentDto,
  UpdatePaymentDto,
  PaymentsModelService
> {
  constructor(private readonly paymentsModelService: PaymentsModelService) {
    super(paymentsModelService);
  }

  @ApiQuery({
    name: 'filter',
    required: false,
    type: FilterPaymentsDto,
  })
  @ApiOkResponse({ type: [CreatePaymentDto] })
  @Get()
  findMany(@Query() query: FilterPaymentsDto): Promise<Payment[]> {
    return super.findMany(query);
  }

  @ApiOkResponse({ type: PaymentDto })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Payment> {
    return super.findUnique(id);
  }

  @ApiCreatedResponse({ type: PaymentDto })
  @Post()
  create(@Body() createPaymentDto: CreatePaymentDto): Promise<Payment> {
    return super.create(createPaymentDto);
  }

  @ApiOkResponse({ type: PaymentDto })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePaymentDto: UpdatePaymentDto,
  ): Promise<Payment> {
    return super.update(id, updatePaymentDto);
  }

  @ApiOkResponse({ type: PaymentDto })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<Payment> {
    return super.delete(id);
  }
}
