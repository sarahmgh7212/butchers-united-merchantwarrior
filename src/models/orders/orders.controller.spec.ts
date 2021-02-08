import { Test, TestingModule } from '@nestjs/testing';
import { OrdersModelController } from './orders.model.controller';
import { OrdersModelService } from './orders.model.service';

describe('OrdersModelController', () => {
  let controller: OrdersModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersModelController],
      providers: [OrdersModelService],
    }).compile();

    controller = module.get<OrdersModelController>(OrdersModelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
