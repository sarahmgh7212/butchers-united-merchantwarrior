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
import { PaymentMethodDto } from './dto/payment-method.dto';
import { FilterPaymentMethodsDto } from './dto/filter-payment-methods.dto';
import { PaymentMethodModelService } from './payment-method.model.service';
import { CreatePaymentMethodDto } from './dto/create-payment-method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment-method.dto';

@ApiTags('PaymentMethod')
@Controller('payment-method')
export class PaymentMethodModelController extends ResourceController<
  PaymentMethod,
  CreatePaymentMethodDto,
  UpdatePaymentMethodDto,
  PaymentMethodModelService
> {
  constructor(private readonly usersModelService: PaymentMethodModelService) {
    super(usersModelService);
  }

  @ApiQuery({
    name: 'filter',
    required: false,
    type: FilterPaymentMethodsDto,
  })
  @ApiOkResponse({ type: [PaymentMethodDto] })
  @Get()
  findMany(@Query() query: FilterPaymentMethodsDto): Promise<PaymentMethod[]> {
    return super.findMany(query);
  }

  @ApiOkResponse({ type: PaymentMethodDto })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<PaymentMethod> {
    return super.findUnique(id);
  }

  @ApiCreatedResponse({ type: PaymentMethodDto })
  @Post()
  create(
    @Body() createPaymentMethodDto: CreatePaymentMethodDto,
  ): Promise<PaymentMethod> {
    return super.create(createPaymentMethodDto);
  }

  @ApiOkResponse({ type: PaymentMethodDto })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePaymentMethodDto: UpdatePaymentMethodDto,
  ): Promise<PaymentMethod> {
    return super.update(id, updatePaymentMethodDto);
  }

  @ApiOkResponse({ type: PaymentMethodDto })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<PaymentMethod> {
    return super.delete(id);
  }
}
