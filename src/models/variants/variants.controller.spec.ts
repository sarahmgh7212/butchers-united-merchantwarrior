import { Test, TestingModule } from '@nestjs/testing';
import { VariantsModelController } from './variants.model.controller';
import { VariantsModelService } from './variants.model.service';

describe('VariantsModelController', () => {
  let controller: VariantsModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VariantsModelController],
      providers: [VariantsModelService],
    }).compile();

    controller = module.get<VariantsModelController>(VariantsModelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
