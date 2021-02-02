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
import { Invitation } from '@prisma/client';
import { ResourceController } from 'src/libs/resources/resource.controller';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { FilterInvitationsDto } from './dto/filter-invitations.dto';
import { ReturnInvitationDto } from './dto/return-invitation.dto';
import { UpdateInvitationDto } from './dto/update-invitation.dto';
import { InvitationsModelService } from './invitationss.model.service';

@ApiTags('Invitations')
@Controller('invitations')
export class InvitationsModelController extends ResourceController<
  Invitation,
  CreateInvitationDto,
  UpdateInvitationDto,
  InvitationsModelService
> {
  constructor(private readonly productsModelService: InvitationsModelService) {
    super(productsModelService);
  }

  @ApiQuery({
    name: 'filter',
    required: false,
    type: FilterInvitationsDto,
  })
  @ApiOkResponse({ type: [CreateInvitationDto] })
  @Get()
  findMany(@Query() query: FilterInvitationsDto): Promise<Invitation[]> {
    return super.findMany(query);
  }

  @ApiOkResponse({ type: ReturnInvitationDto })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Invitation> {
    return super.findUnique(id);
  }

  @ApiCreatedResponse({ type: ReturnInvitationDto })
  @Post()
  create(
    @Body() createInvitationDto: CreateInvitationDto,
  ): Promise<Invitation> {
    return super.create(createInvitationDto);
  }

  @ApiOkResponse({ type: ReturnInvitationDto })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInvitationDto: UpdateInvitationDto,
  ): Promise<Invitation> {
    return super.update(id, updateInvitationDto);
  }

  @ApiOkResponse({ type: ReturnInvitationDto })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<Invitation> {
    return super.delete(id);
  }
}
