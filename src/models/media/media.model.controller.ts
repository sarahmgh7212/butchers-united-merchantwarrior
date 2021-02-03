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
import { Media } from '@prisma/client';
import { ResourceController } from '../../libs/resources/resource.controller';
import { CreateMediaDto } from './dto/create-media.dto';
import { FilterMediaDto } from './dto/filter-media.dto';
import { ReturnMediaDto } from './dto/return-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { MediaModelService } from './media.model.service';

@ApiTags('Media')
@Controller('users')
export class MediaModelController extends ResourceController<
  Media,
  CreateMediaDto,
  UpdateMediaDto,
  MediaModelService
> {
  constructor(private readonly usersModelService: MediaModelService) {
    super(usersModelService);
  }

  @ApiQuery({
    name: 'filter',
    required: false,
    type: FilterMediaDto,
  })
  @ApiOkResponse({ type: [CreateMediaDto] })
  @Get()
  findMany(@Query() query: FilterMediaDto): Promise<Media[]> {
    return super.findMany(query);
  }

  @ApiOkResponse({ type: ReturnMediaDto })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Media> {
    return super.findUnique(id);
  }

  @ApiCreatedResponse({ type: ReturnMediaDto })
  @Post()
  create(@Body() createMediaDto: CreateMediaDto): Promise<Media> {
    return super.create(createMediaDto);
  }

  @ApiOkResponse({ type: ReturnMediaDto })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMediaDto: UpdateMediaDto,
  ): Promise<Media> {
    return super.update(id, updateMediaDto);
  }

  @ApiOkResponse({ type: ReturnMediaDto })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<Media> {
    return super.delete(id);
  }
}
