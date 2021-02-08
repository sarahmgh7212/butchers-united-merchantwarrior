import { Test, TestingModule } from '@nestjs/testing';
import { OrderItemsModelService } from './order-items.model.service';

describe('OrderItemsModelService', () => {
  let service: OrderItemsModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderItemsModelService],
    }).compile();

    service = module.get<OrderItemsModelService>(OrderItemsModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
