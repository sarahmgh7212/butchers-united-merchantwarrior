import { Test, TestingModule } from '@nestjs/testing';
import { PaymentsModelController } from './payments.model.controller';
import { PaymentsModelService } from './payments.model.service';

describe('PaymentsModelController', () => {
  let controller: PaymentsModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentsModelController],
      providers: [PaymentsModelService],
    }).compile();

    controller = module.get<PaymentsModelController>(PaymentsModelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
