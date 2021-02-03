import { Test, TestingModule } from '@nestjs/testing';
import { BrandsModelService } from './brands.model.service';

describe('BrandsModelService', () => {
  let service: BrandsModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrandsModelService],
    }).compile();

    service = module.get<BrandsModelService>(BrandsModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
