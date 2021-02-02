import { Test, TestingModule } from '@nestjs/testing';
import { UsersModelService } from './users.model.service';

describe('UsersModelService', () => {
  let service: UsersModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersModelService],
    }).compile();

    service = module.get<UsersModelService>(UsersModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
