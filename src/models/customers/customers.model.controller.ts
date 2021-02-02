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
import { Customer } from '@prisma/client';
import { ResourceController } from 'src/libs/resources/resource.controller';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { FilterCustomersDto } from './dto/filter-cutomers.dto';
import { ReturnCustomerDto } from './dto/return-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomersModelService } from './customers.model.service';

@ApiTags('Customers')
@Controller('customers')
export class CustomersModelController extends ResourceController<
  Customer,
  CreateCustomerDto,
  UpdateCustomerDto,
  CustomersModelService
> {
  constructor(private readonly productsModelService: CustomersModelService) {
    super(productsModelService);
  }

  @ApiQuery({
    name: 'filter',
    required: false,
    type: FilterCustomersDto,
  })
  @ApiOkResponse({ type: [CreateCustomerDto] })
  @Get()
  findMany(@Query() query: FilterCustomersDto): Promise<Customer[]> {
    return super.findMany(query);
  }

  @ApiOkResponse({ type: ReturnCustomerDto })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Customer> {
    return super.findUnique(id);
  }

  @ApiCreatedResponse({ type: ReturnCustomerDto })
  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto): Promise<Customer> {
    return super.create(createCustomerDto);
  }

  @ApiOkResponse({ type: ReturnCustomerDto })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ): Promise<Customer> {
    return super.update(id, updateCustomerDto);
  }

  @ApiOkResponse({ type: ReturnCustomerDto })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<Customer> {
    return super.delete(id);
  }
}
