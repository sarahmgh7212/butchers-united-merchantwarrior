import { Test, TestingModule } from '@nestjs/testing';
import { CoreLogger } from './core.logger';

describe('CoreLogger', () => {
  let service: CoreLogger;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoreLogger],
    }).compile();

    service = module.get<CoreLogger>(CoreLogger);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
