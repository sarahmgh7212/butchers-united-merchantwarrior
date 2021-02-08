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
import { Product } from '@prisma/client';
import { ResourceController } from 'src/libs/resources/resource.controller';
import { CreateProductDto } from './dto/create-product.dto';
import { FilterProductsDto } from './dto/filter-products.dto';
import { ProductDto } from './dto/product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsModelService } from './products.model.service';

@ApiTags('Products')
@Controller('products')
export class ProductsModelController extends ResourceController<
  Product,
  CreateProductDto,
  UpdateProductDto,
  ProductsModelService
> {
  constructor(private readonly productsModelService: ProductsModelService) {
    super(productsModelService);
  }

  @ApiQuery({
    name: 'filter',
    required: false,
    type: FilterProductsDto,
  })
  @ApiOkResponse({ type: [CreateProductDto] })
  @Get()
  findMany(@Query() query: FilterProductsDto): Promise<Product[]> {
    return super.findMany(query);
  }

  @ApiOkResponse({ type: ProductDto })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Product> {
    return super.findUnique(id);
  }

  @ApiCreatedResponse({ type: ProductDto })
  @Post()
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return super.create(createProductDto);
  }

  @ApiOkResponse({ type: ProductDto })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return super.update(id, updateProductDto);
  }

  @ApiOkResponse({ type: ProductDto })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<Product> {
    return super.delete(id);
  }
}
