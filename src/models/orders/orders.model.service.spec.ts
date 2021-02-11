import { Test, TestingModule } from '@nestjs/testing';
import { OrdersModelService } from './orders.model.service';

describe('OrdersModelService', () => {
  let service: OrdersModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdersModelService],
    }).compile();

    service = module.get<OrdersModelService>(OrdersModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
