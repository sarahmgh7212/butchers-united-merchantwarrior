import { Test, TestingModule } from '@nestjs/testing';
import { InvoicesModelService } from './invoices.model.service';

describe('InvoicesModelService', () => {
  let service: InvoicesModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvoicesModelService],
    }).compile();

    service = module.get<InvoicesModelService>(InvoicesModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
