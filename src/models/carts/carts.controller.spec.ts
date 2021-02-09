import { Test, TestingModule } from '@nestjs/testing';
import { CartsModelController } from './carts.model.controller';
import { CartsModelService } from './carts.model.service';

describe('CartsModelController', () => {
  let controller: CartsModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartsModelController],
      providers: [CartsModelService],
    }).compile();

    controller = module.get<CartsModelController>(CartsModelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
