import { Test, TestingModule } from '@nestjs/testing';
import { MerchantWarriorService } from './merchant-warrior.service';

describe('MerchantWarriorService', () => {
  let service: MerchantWarriorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MerchantWarriorService],
    }).compile();

    service = module.get<MerchantWarriorService>(MerchantWarriorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
