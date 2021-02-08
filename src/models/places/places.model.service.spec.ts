import { Test, TestingModule } from '@nestjs/testing';
import { PlacesModelService } from './places.model.service';

describe('PlacesModelService', () => {
  let service: PlacesModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlacesModelService],
    }).compile();

    service = module.get<PlacesModelService>(PlacesModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
