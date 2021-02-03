import { Test, TestingModule } from '@nestjs/testing';
import { ProductsUnitsModelService } from './productsUnits.model.service';

describe('ProductsUnitsModelService', () => {
  let service: ProductsUnitsModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsUnitsModelService],
    }).compile();

    service = module.get<ProductsUnitsModelService>(ProductsUnitsModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
