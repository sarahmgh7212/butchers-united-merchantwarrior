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
import { ProductUnit } from '@prisma/client';
import { ResourceController } from 'src/libs/resources/resource.controller';
import { CreateProductUnitDto } from './dto/create-product-unit.dto';
import { FilterProductUnitDto } from './dto/filter-product-unit.dto';
import { ProductUnitDto } from './dto/product-unit.dto';
import { UpdateProductUnitDto } from './dto/update-product-unit.dto';
import { ProductUnitModelService } from './productUnit.model.service';

@ApiTags('ProductUnit')
@Controller('product-unit')
export class ProductUnitModelController extends ResourceController<
  ProductUnit,
  CreateProductUnitDto,
  UpdateProductUnitDto,
  ProductUnitModelService
> {
  constructor(
    private readonly productsUnitsModelService: ProductUnitModelService,
  ) {
    super(productsUnitsModelService);
  }

  @ApiQuery({
    name: 'filter',
    required: false,
    type: FilterProductUnitDto,
  })
  @ApiOkResponse({ type: [CreateProductUnitDto] })
  @Get()
  findMany(@Query() query: FilterProductUnitDto): Promise<ProductUnit[]> {
    return super.findMany(query);
  }

  @ApiOkResponse({ type: ProductUnitDto })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProductUnit> {
    return super.findUnique(id);
  }

  @ApiCreatedResponse({ type: ProductUnitDto })
  @Post()
  create(
    @Body() createProductUnitDto: CreateProductUnitDto,
  ): Promise<ProductUnit> {
    return super.create(createProductUnitDto);
  }

  @ApiOkResponse({ type: ProductUnitDto })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductUnitDto: UpdateProductUnitDto,
  ): Promise<ProductUnit> {
    return super.update(id, updateProductUnitDto);
  }

  @ApiOkResponse({ type: ProductUnitDto })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<ProductUnit> {
    return super.delete(id);
  }
}
