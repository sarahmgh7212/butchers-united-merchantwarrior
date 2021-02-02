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
import { User } from '@prisma/client';
import { ResourceController } from 'src/libs/resources/resource.controller';
import { CreateUserDto } from './dto/create-user.dto';
import { FilterUsersDto } from './dto/filter-users.dto';
import { ReturnUserDto } from './dto/return-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersModelService } from './users.model.service';

@ApiTags('Users')
@Controller('users')
export class UsersModelController extends ResourceController<
  User,
  CreateUserDto,
  UpdateUserDto,
  UsersModelService
> {
  constructor(private readonly productsModelService: UsersModelService) {
    super(productsModelService);
  }

  @ApiQuery({
    name: 'filter',
    required: false,
    type: FilterUsersDto,
  })
  @ApiOkResponse({ type: [CreateUserDto] })
  @Get()
  findMany(@Query() query: FilterUsersDto): Promise<User[]> {
    return super.findMany(query);
  }

  @ApiOkResponse({ type: ReturnUserDto })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return super.findUnique(id);
  }

  @ApiCreatedResponse({ type: ReturnUserDto })
  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return super.create(createUserDto);
  }

  @ApiOkResponse({ type: ReturnUserDto })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return super.update(id, updateUserDto);
  }

  @ApiOkResponse({ type: ReturnUserDto })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<User> {
    return super.delete(id);
  }
}
