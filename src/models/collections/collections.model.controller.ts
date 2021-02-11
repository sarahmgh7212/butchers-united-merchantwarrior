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
import { Collection } from '@prisma/client';
import { ResourceController } from '../../libs/resources/resource.controller';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { FilterCollectionsDto } from './dto/filter-collections.dto';
import { CollectionDto } from './dto/collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { CollectionsModelService } from './collections.model.service';

@ApiTags('Collections')
@Controller('collections')
export class CollectionsModelController extends ResourceController<
  Collection,
  CreateCollectionDto,
  UpdateCollectionDto,
  CollectionsModelService
> {
  constructor(private readonly usersModelService: CollectionsModelService) {
    super(usersModelService);
  }

  @ApiQuery({
    name: 'filter',
    required: false,
    type: FilterCollectionsDto,
  })
  @ApiOkResponse({ type: [CreateCollectionDto] })
  @Get()
  findMany(@Query() query: FilterCollectionsDto): Promise<Collection[]> {
    return super.findMany(query);
  }

  @ApiOkResponse({ type: CollectionDto })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Collection> {
    return super.findUnique(id);
  }

  @ApiCreatedResponse({ type: CollectionDto })
  @Post()
  create(
    @Body() createCollectionDto: CreateCollectionDto,
  ): Promise<Collection> {
    return super.create(createCollectionDto);
  }

  @ApiOkResponse({ type: CollectionDto })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCollectionDto: UpdateCollectionDto,
  ): Promise<Collection> {
    return super.update(id, updateCollectionDto);
  }

  @ApiOkResponse({ type: CollectionDto })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<Collection> {
    return super.delete(id);
  }
}
