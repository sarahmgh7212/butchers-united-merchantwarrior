import { Test, TestingModule } from '@nestjs/testing';
import { CollectionsModelService } from './collections.model.service';

describe('CollectionsModelService', () => {
  let service: CollectionsModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollectionsModelService],
    }).compile();

    service = module.get<CollectionsModelService>(CollectionsModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
