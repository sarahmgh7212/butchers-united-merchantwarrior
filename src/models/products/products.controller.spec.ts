import { Test, TestingModule } from '@nestjs/testing';
import { ProductsModelController } from './products.model.controller';
import { ProductsModelService } from './products.model.service';

describe('ProductsModelController', () => {
  let controller: ProductsModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsModelController],
      providers: [ProductsModelService],
    }).compile();

    controller = module.get<ProductsModelController>(ProductsModelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
