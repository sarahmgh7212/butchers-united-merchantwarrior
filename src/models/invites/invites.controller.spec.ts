import { Test, TestingModule } from '@nestjs/testing';
import { InvitesModelController } from './invites.model.controller';
import { InvitesModelService } from './invites.model.service';

describe('InvitesModelController', () => {
  let controller: InvitesModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvitesModelController],
      providers: [InvitesModelService],
    }).compile();

    controller = module.get<InvitesModelController>(InvitesModelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
