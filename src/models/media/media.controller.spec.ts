import { Test, TestingModule } from '@nestjs/testing';
import { MediaModelController } from './media.model.controller';
import { MediaModelService } from './media.model.service';

describe('MediaModelController', () => {
  let controller: MediaModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MediaModelController],
      providers: [MediaModelService],
    }).compile();

    controller = module.get<MediaModelController>(MediaModelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
