import { Test, TestingModule } from '@nestjs/testing';
import { PaymentsModelService } from './payments.model.service';

describe('PaymentsModelService', () => {
  let service: PaymentsModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentsModelService],
    }).compile();

    service = module.get<PaymentsModelService>(PaymentsModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
