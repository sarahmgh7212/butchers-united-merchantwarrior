import { Test, TestingModule } from '@nestjs/testing';
import { DiscountsModelController } from './discounts.model.controller';
import { DiscountsModelService } from './discounts.model.service';

describe('DiscountsModelController', () => {
  let controller: DiscountsModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiscountsModelController],
      providers: [DiscountsModelService],
    }).compile();

    controller = module.get<DiscountsModelController>(DiscountsModelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
