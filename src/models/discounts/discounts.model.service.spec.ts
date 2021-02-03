import { Test, TestingModule } from '@nestjs/testing';
import { DiscountsModelService } from './discounts.model.service';

describe('DiscountsModelService', () => {
  let service: DiscountsModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiscountsModelService],
    }).compile();

    service = module.get<DiscountsModelService>(DiscountsModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
