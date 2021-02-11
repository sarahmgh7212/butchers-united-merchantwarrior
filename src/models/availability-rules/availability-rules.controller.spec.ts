import { Test, TestingModule } from '@nestjs/testing';
import { AvailabilityRulesModelController } from './availability-rules.model.controller';
import { AvailabilityRulesModelService } from './availability-rules.model.service';

describe('AvailabilityRulessModelController', () => {
  let controller: AvailabilityRulesModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvailabilityRulesModelController],
      providers: [AvailabilityRulesModelService],
    }).compile();

    controller = module.get<AvailabilityRulesModelController>(
      AvailabilityRulesModelController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
