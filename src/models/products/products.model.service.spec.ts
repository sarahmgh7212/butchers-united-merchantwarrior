import { Test, TestingModule } from '@nestjs/testing';
import { ProductsModelService } from './products.model.service';

describe('ProductsModelService', () => {
  let service: ProductsModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsModelService],
    }).compile();

    service = module.get<ProductsModelService>(ProductsModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
