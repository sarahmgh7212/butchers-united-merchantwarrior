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
import { Order } from '@prisma/client';
import { ResourceController } from 'src/libs/resources/resource.controller';
import { OrderDto } from './dto/order.dto';
import { FilterOrdersDto } from './dto/filter-orders.dto';
import { OrdersModelService } from './orders.model.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@ApiTags('Orders')
@Controller('orders')
export class OrdersModelController extends ResourceController<
  Order,
  CreateOrderDto,
  UpdateOrderDto,
  OrdersModelService
> {
  constructor(private readonly ordersModelService: OrdersModelService) {
    super(ordersModelService);
  }

  @ApiQuery({
    name: 'filter',
    required: false,
    type: FilterOrdersDto,
  })
  @ApiOkResponse({ type: [OrderDto] })
  @Get()
  findMany(@Query() query: FilterOrdersDto): Promise<Order[]> {
    return super.findMany(query);
  }

  @ApiOkResponse({ type: OrderDto })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Order> {
    return super.findUnique(id);
  }

  @ApiCreatedResponse({ type: OrderDto })
  @Post()
  create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return super.create(createOrderDto);
  }

  @ApiOkResponse({ type: OrderDto })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ): Promise<Order> {
    return super.update(id, updateOrderDto);
  }

  @ApiOkResponse({ type: OrderDto })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<Order> {
    return super.delete(id);
  }
}
