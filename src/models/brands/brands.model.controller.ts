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
import { Brand } from '@prisma/client';
import { ResourceController } from '../../libs/resources/resource.controller';
import { CreateBrandDto } from './dto/create-brand.dto';
import { FilterBrandsDto } from './dto/filter-brands.dto';
import { ReturnBrandDto } from './dto/return-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { BrandsModelService } from './brands.model.service';

@ApiTags('Brands')
@Controller('brands')
export class BrandsModelController extends ResourceController<
  Brand,
  CreateBrandDto,
  UpdateBrandDto,
  BrandsModelService
> {
  constructor(private readonly usersModelService: BrandsModelService) {
    super(usersModelService);
  }

  @ApiQuery({
    name: 'filter',
    required: false,
    type: FilterBrandsDto,
  })
  @ApiOkResponse({ type: [CreateBrandDto] })
  @Get()
  findMany(@Query() query: FilterBrandsDto): Promise<Brand[]> {
    return super.findMany(query);
  }

  @ApiOkResponse({ type: ReturnBrandDto })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Brand> {
    return super.findUnique(id);
  }

  @ApiCreatedResponse({ type: ReturnBrandDto })
  @Post()
  create(@Body() createBrandDto: CreateBrandDto): Promise<Brand> {
    return super.create(createBrandDto);
  }

  @ApiOkResponse({ type: ReturnBrandDto })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBrandDto: UpdateBrandDto,
  ): Promise<Brand> {
    return super.update(id, updateBrandDto);
  }

  @ApiOkResponse({ type: ReturnBrandDto })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<Brand> {
    return super.delete(id);
  }
}
