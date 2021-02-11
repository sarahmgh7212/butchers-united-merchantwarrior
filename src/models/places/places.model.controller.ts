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
import { Place } from '@prisma/client';
import { ResourceController } from 'src/libs/resources/resource.controller';
import { PlaceDto } from './dto/place.dto';
import { FilterPlacesDto } from './dto/filter-places.dto';
import { PlacesModelService } from './places.model.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';

@ApiTags('Places')
@Controller('places')
export class PlacesModelController extends ResourceController<
  Place,
  CreatePlaceDto,
  UpdatePlaceDto,
  PlacesModelService
> {
  constructor(private readonly usersModelService: PlacesModelService) {
    super(usersModelService);
  }

  @ApiQuery({
    name: 'filter',
    required: false,
    type: FilterPlacesDto,
  })
  @ApiOkResponse({ type: [PlaceDto] })
  @Get()
  findMany(@Query() query: FilterPlacesDto): Promise<Place[]> {
    return super.findMany(query);
  }

  @ApiOkResponse({ type: PlaceDto })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Place> {
    return super.findUnique(id);
  }

  @ApiCreatedResponse({ type: PlaceDto })
  @Post()
  create(@Body() createPlaceDto: CreatePlaceDto): Promise<Place> {
    return super.create(createPlaceDto);
  }

  @ApiOkResponse({ type: PlaceDto })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlaceDto: UpdatePlaceDto,
  ): Promise<Place> {
    return super.update(id, updatePlaceDto);
  }

  @ApiOkResponse({ type: PlaceDto })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<Place> {
    return super.delete(id);
  }
}
