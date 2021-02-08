import { Test, TestingModule } from '@nestjs/testing';
import { ProductUnitModelService } from './productUnit.model.service';

describe('ProductUnitModelService', () => {
  let service: ProductUnitModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductUnitModelService],
    }).compile();

    service = module.get<ProductUnitModelService>(ProductUnitModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
