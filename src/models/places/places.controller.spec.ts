import { Test, TestingModule } from '@nestjs/testing';
import { PlacesModelController } from './places.model.controller';
import { PlacesModelService } from './places.model.service';

describe('PlacesModelController', () => {
  let controller: PlacesModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlacesModelController],
      providers: [PlacesModelService],
    }).compile();

    controller = module.get<PlacesModelController>(PlacesModelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
