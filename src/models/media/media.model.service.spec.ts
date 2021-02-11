import { Test, TestingModule } from '@nestjs/testing';
import { MediaModelService } from './media.model.service';

describe('MediaModelService', () => {
  let service: MediaModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediaModelService],
    }).compile();

    service = module.get<MediaModelService>(MediaModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
