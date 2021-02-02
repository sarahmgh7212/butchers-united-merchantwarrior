import { Test, TestingModule } from '@nestjs/testing';
import { CustomersModelController } from './customers.model.controller';
import { CustomersModelService } from './customers.model.service';

describe('CustomersModelController', () => {
  let controller: CustomersModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomersModelController],
      providers: [CustomersModelService],
    }).compile();

    controller = module.get<CustomersModelController>(CustomersModelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
