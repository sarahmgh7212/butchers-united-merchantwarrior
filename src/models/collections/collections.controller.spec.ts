import { Test, TestingModule } from '@nestjs/testing';
import { CollectionsModelController } from './collections.model.controller';
import { CollectionsModelService } from './collections.model.service';

describe('CollectionsModelController', () => {
  let controller: CollectionsModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollectionsModelController],
      providers: [CollectionsModelService],
    }).compile();

    controller = module.get<CollectionsModelController>(
      CollectionsModelController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
