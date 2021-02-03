import { Test, TestingModule } from '@nestjs/testing';
import { VariantsModelService } from './variants.model.service';

describe('VariantsModelService', () => {
  let service: VariantsModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VariantsModelService],
    }).compile();

    service = module.get<VariantsModelService>(VariantsModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
