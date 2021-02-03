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
import { Variant } from '@prisma/client';
import { ResourceController } from 'src/libs/resources/resource.controller';
import { CreateVariantDto } from './dto/create-variant.dto';
import { FilterVariantsDto } from './dto/filter-variants.dto';
import { ReturnVariantDto } from './dto/return-variant.dto';
import { UpdateVariantDto } from './dto/update-variant.dto';
import { VariantsModelService } from './variants.model.service';

@ApiTags('Variants')
@Controller('variants')
export class VariantsModelController extends ResourceController<
  Variant,
  CreateVariantDto,
  UpdateVariantDto,
  VariantsModelService
> {
  constructor(private readonly variantsModelService: VariantsModelService) {
    super(variantsModelService);
  }

  @ApiQuery({
    name: 'filter',
    required: false,
    type: FilterVariantsDto,
  })
  @ApiOkResponse({ type: [CreateVariantDto] })
  @Get()
  findMany(@Query() query: FilterVariantsDto): Promise<Variant[]> {
    return super.findMany(query);
  }

  @ApiOkResponse({ type: ReturnVariantDto })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Variant> {
    return super.findUnique(id);
  }

  @ApiCreatedResponse({ type: ReturnVariantDto })
  @Post()
  create(@Body() createVariantDto: CreateVariantDto): Promise<Variant> {
    return super.create(createVariantDto);
  }

  @ApiOkResponse({ type: ReturnVariantDto })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVariantDto: UpdateVariantDto,
  ): Promise<Variant> {
    return super.update(id, updateVariantDto);
  }

  @ApiOkResponse({ type: ReturnVariantDto })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<Variant> {
    return super.delete(id);
  }
}
