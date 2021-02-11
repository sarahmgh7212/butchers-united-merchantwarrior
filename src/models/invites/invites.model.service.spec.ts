import { Test, TestingModule } from '@nestjs/testing';
import { InvitesModelService } from './invites.model.service';

describe('InvitesModelService', () => {
  let service: InvitesModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvitesModelService],
    }).compile();

    service = module.get<InvitesModelService>(InvitesModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
