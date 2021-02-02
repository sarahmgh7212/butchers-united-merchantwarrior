import { Test, TestingModule } from '@nestjs/testing';
import { PaymentMethodsModelService } from './payment-methods.model.service';

describe('PaymentMethodsModelService', () => {
  let service: PaymentMethodsModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentMethodsModelService],
    }).compile();

    service = module.get<PaymentMethodsModelService>(PaymentMethodsModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
