import { Test, TestingModule } from '@nestjs/testing';
import { PaymentMethodModelService } from './payment-method.model.service';

describe('PaymentMethodModelService', () => {
  let service: PaymentMethodModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentMethodModelService],
    }).compile();

    service = module.get<PaymentMethodModelService>(PaymentMethodModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
