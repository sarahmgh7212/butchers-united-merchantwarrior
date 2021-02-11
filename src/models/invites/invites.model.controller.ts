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
import { Invite } from '@prisma/client';
import { ResourceController } from 'src/libs/resources/resource.controller';
import { CreateInviteDto } from './dto/create-invite.dto';
import { FilterInvitesDto } from './dto/filter-invites.dto';
import { InviteDto } from './dto/invite.dto';
import { UpdateInviteDto } from './dto/update-invite.dto';
import { InvitesModelService } from './invites.model.service';

@ApiTags('Invites')
@Controller('invites')
export class InvitesModelController extends ResourceController<
  Invite,
  CreateInviteDto,
  UpdateInviteDto,
  InvitesModelService
> {
  constructor(private readonly invitesModelService: InvitesModelService) {
    super(invitesModelService);
  }

  @ApiQuery({
    name: 'filter',
    required: false,
    type: FilterInvitesDto,
  })
  @ApiOkResponse({ type: [InviteDto] })
  @Get()
  findMany(@Query() query: FilterInvitesDto): Promise<Invite[]> {
    return super.findMany(query);
  }

  @ApiOkResponse({ type: InviteDto })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Invite> {
    return super.findUnique(id);
  }

  @ApiCreatedResponse({ type: InviteDto })
  @Post()
  create(@Body() createInviteDto: CreateInviteDto): Promise<Invite> {
    return super.create(createInviteDto);
  }

  @ApiOkResponse({ type: InviteDto })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInviteDto: UpdateInviteDto,
  ): Promise<Invite> {
    return super.update(id, updateInviteDto);
  }

  @ApiOkResponse({ type: InviteDto })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<Invite> {
    return super.delete(id);
  }
}
