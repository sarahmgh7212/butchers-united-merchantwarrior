import { Test, TestingModule } from '@nestjs/testing';
import { AvailabilityRulesModelService } from './availability-rules.model.service';

describe('AvailabilityRulessModelService', () => {
  let service: AvailabilityRulesModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvailabilityRulesModelService],
    }).compile();

    service = module.get<AvailabilityRulesModelService>(
      AvailabilityRulesModelService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
