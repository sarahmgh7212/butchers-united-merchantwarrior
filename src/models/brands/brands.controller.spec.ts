import { Test, TestingModule } from '@nestjs/testing';
import { BrandsModelController } from './brands.model.controller';
import { BrandsModelService } from './brands.model.service';

describe('BrandsModelController', () => {
  let controller: BrandsModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrandsModelController],
      providers: [BrandsModelService],
    }).compile();

    controller = module.get<BrandsModelController>(BrandsModelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
