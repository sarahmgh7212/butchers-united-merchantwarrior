import { Test, TestingModule } from '@nestjs/testing';
import { PaymentMethodsModelController } from './payment-methods.model.controller';
import { PaymentMethodsModelService } from './payment-methods.model.service';

describe('paymentMethodModelController', () => {
  let controller: PaymentMethodsModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentMethodsModelController],
      providers: [PaymentMethodsModelService],
    }).compile();

    controller = module.get<PaymentMethodsModelController>(PaymentMethodsModelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
