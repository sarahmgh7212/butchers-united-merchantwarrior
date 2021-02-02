import { Test, TestingModule } from '@nestjs/testing';
import { InvitationsModelService } from './invitationss.model.service';

describe('InvitationsModelService', () => {
  let service: InvitationsModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvitationsModelService],
    }).compile();

    service = module.get<InvitationsModelService>(InvitationsModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
