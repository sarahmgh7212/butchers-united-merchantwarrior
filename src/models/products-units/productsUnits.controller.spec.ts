import { Test, TestingModule } from '@nestjs/testing';
import { ProductsUnitsModelController } from './productsUnits.model.controller';
import { ProductsUnitsModelService } from './productsUnits.model.service';

describe('ProductsUnitssModelController', () => {
  let controller: ProductsUnitsModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsUnitsModelController],
      providers: [ProductsUnitsModelService],
    }).compile();

    controller = module.get<ProductsUnitsModelController>(
      ProductsUnitsModelController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
