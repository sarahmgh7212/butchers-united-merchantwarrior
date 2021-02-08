import { Test, TestingModule } from '@nestjs/testing';
import { InvoicesModelController } from './invoices.model.controller';
import { InvoicesModelService } from './invoices.model.service';

describe('InvoicesModelController', () => {
  let controller: InvoicesModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvoicesModelController],
      providers: [InvoicesModelService],
    }).compile();

    controller = module.get<InvoicesModelController>(InvoicesModelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
