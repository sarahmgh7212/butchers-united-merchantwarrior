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
import { PaymentMethod } from '@prisma/client';
import { ResourceController } from 'src/libs/resources/resource.controller';
import { CreatePaymentMethodsDto } from './dto/create-payment-methods.dto';
import { FilterPaymentMethodsDto } from './dto/filter-payment-methods.dto';
import { ReturnPaymentMethodsDto } from './dto/return-payment-methods.dto';
import { UpdatePaymentMethodsDto } from './dto/update-payment-methods.dto';
import { PaymentMethodsModelService } from './payment-methods.model.service';

@ApiTags('PaymentMethods')
@Controller('payment-methods')
export class PaymentMethodsModelController extends ResourceController<
  PaymentMethod,
  CreatePaymentMethodsDto,
  UpdatePaymentMethodsDto,
  PaymentMethodsModelService
> {
  constructor(
    private readonly paymentsMethodsModelService: PaymentMethodsModelService,
  ) {
    super(paymentsMethodsModelService);
  }

  @ApiQuery({
    name: 'filter',
    required: false,
    type: FilterPaymentMethodsDto,
  })
  @ApiOkResponse({ type: [CreatePaymentMethodsDto] })
  @Get()
  findMany(@Query() query: FilterPaymentMethodsDto): Promise<PaymentMethod[]> {
    return super.findMany(query);
  }

  @ApiOkResponse({ type: ReturnPaymentMethodsDto })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<PaymentMethod> {
    return super.findUnique(id);
  }

  @ApiCreatedResponse({ type: ReturnPaymentMethodsDto })
  @Post()
  create(
    @Body() createPaymentMethodDto: CreatePaymentMethodsDto,
  ): Promise<PaymentMethod> {
    return super.create(CreatePaymentMethodsDto);
  }

  @ApiOkResponse({ type: ReturnPaymentMethodsDto })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePaymentDto: UpdatePaymentMethodsDto,
  ): Promise<PaymentMethod> {
    return super.update(id, updatePaymentDto);
  }

  @ApiOkResponse({ type: ReturnPaymentMethodsDto })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<PaymentMethod> {
    return super.delete(id);
  }
}
