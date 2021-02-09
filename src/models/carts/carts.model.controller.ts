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
import { Cart } from '@prisma/client';
import { ResourceController } from 'src/libs/resources/resource.controller';
import { CartDto } from './dto/cart.dto';
import { FilterCartsDto } from './dto/filter-carts.dto';
import { CartsModelService } from './carts.model.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@ApiTags('Carts')
@Controller('carts')
export class CartsModelController extends ResourceController<
  Cart,
  CreateCartDto,
  UpdateCartDto,
  CartsModelService
> {
  constructor(private readonly usersModelService: CartsModelService) {
    super(usersModelService);
  }

  @ApiQuery({
    name: 'filter',
    required: false,
    type: FilterCartsDto,
  })
  @ApiOkResponse({ type: [CartDto] })
  @Get()
  findMany(@Query() query: FilterCartsDto): Promise<Cart[]> {
    return super.findMany(query);
  }

  @ApiOkResponse({ type: CartDto })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Cart> {
    return super.findUnique(id);
  }

  @ApiCreatedResponse({ type: CartDto })
  @Post()
  create(@Body() createCartDto: CreateCartDto): Promise<Cart> {
    return super.create(createCartDto);
  }

  @ApiOkResponse({ type: CartDto })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCartDto: UpdateCartDto,
  ): Promise<Cart> {
    return super.update(id, updateCartDto);
  }

  @ApiOkResponse({ type: CartDto })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<Cart> {
    return super.delete(id);
  }
}
