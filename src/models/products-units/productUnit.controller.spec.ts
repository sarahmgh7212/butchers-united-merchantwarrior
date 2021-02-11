import { Test, TestingModule } from '@nestjs/testing';
import { ProductUnitModelController } from './productUnit.model.controller';
import { ProductUnitModelService } from './productUnit.model.service';

describe('ProductsUnitssModelController', () => {
  let controller: ProductUnitModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductUnitModelController],
      providers: [ProductUnitModelService],
    }).compile();

    controller = module.get<ProductUnitModelController>(
      ProductUnitModelController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
