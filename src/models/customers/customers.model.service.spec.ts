import { Test, TestingModule } from '@nestjs/testing';
import { CustomersModelService } from './customers.model.service';

describe('CustomersModelService', () => {
  let service: CustomersModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomersModelService],
    }).compile();

    service = module.get<CustomersModelService>(CustomersModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
