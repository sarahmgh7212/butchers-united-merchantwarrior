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
import { OrderItem } from '@prisma/client';
import { ResourceController } from 'src/libs/resources/resource.controller';
import { OrderItemDto } from './dto/order-item.dto';
import { FilterOrderItemsDto } from './dto/filter-order-items.dto';
import { OrderItemsModelService } from './order-items.model.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';

@ApiTags('OrderItems')
@Controller('order-items')
export class OrderItemsModelController extends ResourceController<
  OrderItem,
  CreateOrderItemDto,
  UpdateOrderItemDto,
  OrderItemsModelService
> {
  constructor(private readonly usersModelService: OrderItemsModelService) {
    super(usersModelService);
  }

  @ApiQuery({
    name: 'filter',
    required: false,
    type: FilterOrderItemsDto,
  })
  @ApiOkResponse({ type: [OrderItemDto] })
  @Get()
  findMany(@Query() query: FilterOrderItemsDto): Promise<OrderItem[]> {
    return super.findMany(query);
  }

  @ApiOkResponse({ type: OrderItemDto })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<OrderItem> {
    return super.findUnique(id);
  }

  @ApiCreatedResponse({ type: OrderItemDto })
  @Post()
  create(@Body() createOrderItemDto: CreateOrderItemDto): Promise<OrderItem> {
    return super.create(createOrderItemDto);
  }

  @ApiOkResponse({ type: OrderItemDto })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrderItemDto: UpdateOrderItemDto,
  ): Promise<OrderItem> {
    return super.update(id, updateOrderItemDto);
  }

  @ApiOkResponse({ type: OrderItemDto })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<OrderItem> {
    return super.delete(id);
  }
}
