import { Test, TestingModule } from '@nestjs/testing';
import { PaymentMethodModelController } from './payment-method.model.controller';
import { PaymentMethodModelService } from './payment-method.model.service';

describe('PaymentMethodModelController', () => {
  let controller: PaymentMethodModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentMethodModelController],
      providers: [PaymentMethodModelService],
    }).compile();

    controller = module.get<PaymentMethodModelController>(
      PaymentMethodModelController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
