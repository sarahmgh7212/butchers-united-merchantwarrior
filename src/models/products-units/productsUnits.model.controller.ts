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
import { CreateProductsUnitsDto } from './dto/create-products-units.dto';
import { FilterProductsUnitsDto } from './dto/filter-products-units.dto';
import { ReturnProductsUnitsDto } from './dto/return-products-units.dto';
import { UpdateProductsUnitsDto } from './dto/update-products-units.dto';
import { ProductsUnitsModelService } from './productsUnits.model.service';

@ApiTags('ProductsUnitss')
@Controller('users')
export class ProductsUnitsModelController extends ResourceController<
  ProductUnit,
  CreateProductsUnitsDto,
  UpdateProductsUnitsDto,
  ProductsUnitsModelService
> {
  constructor(
    private readonly productsUnitsModelService: ProductsUnitsModelService,
  ) {
    super(productsUnitsModelService);
  }

  @ApiQuery({
    name: 'filter',
    required: false,
    type: FilterProductsUnitsDto,
  })
  @ApiOkResponse({ type: [CreateProductsUnitsDto] })
  @Get()
  findMany(@Query() query: FilterProductsUnitsDto): Promise<ProductUnit[]> {
    return super.findMany(query);
  }

  @ApiOkResponse({ type: ReturnProductsUnitsDto })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProductUnit> {
    return super.findUnique(id);
  }

  @ApiCreatedResponse({ type: ReturnProductsUnitsDto })
  @Post()
  create(
    @Body() createProductsUnitsDto: CreateProductsUnitsDto,
  ): Promise<ProductUnit> {
    return super.create(createProductsUnitsDto);
  }

  @ApiOkResponse({ type: ReturnProductsUnitsDto })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductsUnitsDto: UpdateProductsUnitsDto,
  ): Promise<ProductUnit> {
    return super.update(id, updateProductsUnitsDto);
  }

  @ApiOkResponse({ type: ReturnProductsUnitsDto })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<ProductsUnits> {
    return super.delete(id);
  }
}
