import { Test, TestingModule } from '@nestjs/testing';
import { OrderItemsModelController } from './order-items.model.controller';
import { OrderItemsModelService } from './order-items.model.service';

describe('OrderItemsModelController', () => {
  let controller: OrderItemsModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderItemsModelController],
      providers: [OrderItemsModelService],
    }).compile();

    controller = module.get<OrderItemsModelController>(
      OrderItemsModelController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
