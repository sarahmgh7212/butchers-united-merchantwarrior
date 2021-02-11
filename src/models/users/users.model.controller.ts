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
import { UserDto } from './dto/user.dto';
import { FilterUsersDto } from './dto/filter-users.dto';
import { UsersModelService } from './users.model.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('Users')
@Controller('users')
export class UsersModelController extends ResourceController<
  User,
  CreateUserDto,
  UpdateUserDto,
  UsersModelService
> {
  constructor(private readonly usersModelService: UsersModelService) {
    super(usersModelService);
  }

  @ApiQuery({
    name: 'filter',
    required: false,
    type: FilterUsersDto,
  })
  @ApiOkResponse({ type: [UserDto] })
  @Get()
  findMany(@Query() query: FilterUsersDto): Promise<User[]> {
    return super.findMany(query);
  }

  @ApiOkResponse({ type: UserDto })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return super.findUnique(id);
  }

  @ApiCreatedResponse({ type: UserDto })
  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return super.create(createUserDto);
  }

  @ApiOkResponse({ type: UserDto })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return super.update(id, updateUserDto);
  }

  @ApiOkResponse({ type: UserDto })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<User> {
    return super.delete(id);
  }
}
