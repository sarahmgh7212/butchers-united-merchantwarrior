import { Test, TestingModule } from '@nestjs/testing';
import { CartsModelService } from './carts.model.service';

describe('CartsModelService', () => {
  let service: CartsModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CartsModelService],
    }).compile();

    service = module.get<CartsModelService>(CartsModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
