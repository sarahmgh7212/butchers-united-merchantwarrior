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
import { AvailabilityRule } from '@prisma/client';
import { ResourceController } from '../../libs/resources/resource.controller';
import { CreateAvailabilityRulesDto } from './dto/create-availability-rules.dto';
import { FilterAvailabilityRulesDto } from './dto/filter-availability-rules.dto';
import { AvailabilityRulesDto } from './dto/availability-rules.dto';
import { UpdateAvailabilityRulesDto } from './dto/update-availability-rules.dto';
import { AvailabilityRulesModelService } from './availability-rules.model.service';

@ApiTags('AvailabilityRuless')
@Controller('availability-rules')
export class AvailabilityRulesModelController extends ResourceController<
  AvailabilityRule,
  CreateAvailabilityRulesDto,
  UpdateAvailabilityRulesDto,
  AvailabilityRulesModelService
> {
  constructor(
    private readonly usersModelService: AvailabilityRulesModelService,
  ) {
    super(usersModelService);
  }

  @ApiQuery({
    name: 'filter',
    required: false,
    type: FilterAvailabilityRulesDto,
  })
  @ApiOkResponse({ type: [CreateAvailabilityRulesDto] })
  @Get()
  findMany(
    @Query() query: FilterAvailabilityRulesDto,
  ): Promise<AvailabilityRule[]> {
    return super.findMany(query);
  }

  @ApiOkResponse({ type: AvailabilityRulesDto })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<AvailabilityRule> {
    return super.findUnique(id);
  }

  @ApiCreatedResponse({ type: AvailabilityRulesDto })
  @Post()
  create(
    @Body() createAvailabilityRulesDto: CreateAvailabilityRulesDto,
  ): Promise<AvailabilityRule> {
    return super.create(createAvailabilityRulesDto);
  }

  @ApiOkResponse({ type: AvailabilityRulesDto })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAvailabilityRulesDto: UpdateAvailabilityRulesDto,
  ): Promise<AvailabilityRule> {
    return super.update(id, updateAvailabilityRulesDto);
  }

  @ApiOkResponse({ type: AvailabilityRulesDto })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<AvailabilityRule> {
    return super.delete(id);
  }
}
