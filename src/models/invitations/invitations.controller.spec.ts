import { Test, TestingModule } from '@nestjs/testing';
import { InvitationsModelController } from './invitations.model.controller';
import { InvitationsModelService } from './invitationss.model.service';

describe('InvitationsModelController', () => {
  let controller: InvitationsModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvitationsModelController],
      providers: [InvitationsModelService],
    }).compile();

    controller = module.get<InvitationsModelController>(
      InvitationsModelController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
