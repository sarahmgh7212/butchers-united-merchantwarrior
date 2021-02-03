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
import { Discount } from '@prisma/client';
import { ResourceController } from '../../libs/resources/resource.controller';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { FilterDiscountsDto } from './dto/filter-discounts.dto';
import { ReturnDiscountDto } from './dto/return-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
import { DiscountsModelService } from './discounts.model.service';

@ApiTags('Discounts')
@Controller('discounts')
export class DiscountsModelController extends ResourceController<
  Discount,
  CreateDiscountDto,
  UpdateDiscountDto,
  DiscountsModelService
> {
  constructor(private readonly discountsModelService: DiscountsModelService) {
    super(discountsModelService);
  }

  @ApiQuery({
    name: 'filter',
    required: false,
    type: FilterDiscountsDto,
  })
  @ApiOkResponse({ type: [CreateDiscountDto] })
  @Get()
  findMany(@Query() query: FilterDiscountsDto): Promise<Discount[]> {
    return super.findMany(query);
  }

  @ApiOkResponse({ type: ReturnDiscountDto })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Discount> {
    return super.findUnique(id);
  }

  @ApiCreatedResponse({ type: ReturnDiscountDto })
  @Post()
  create(@Body() createDiscountDto: CreateDiscountDto): Promise<Discount> {
    return super.create(createDiscountDto);
  }

  @ApiOkResponse({ type: ReturnDiscountDto })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDiscountDto: UpdateDiscountDto,
  ): Promise<Discount> {
    return super.update(id, updateDiscountDto);
  }

  @ApiOkResponse({ type: ReturnDiscountDto })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<Discount> {
    return super.delete(id);
  }
}
