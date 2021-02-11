import { Test, TestingModule } from '@nestjs/testing';
import { UsersModelController } from './users.model.controller';
import { UsersModelService } from './users.model.service';

describe('UsersModelController', () => {
  let controller: UsersModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersModelController],
      providers: [UsersModelService],
    }).compile();

    controller = module.get<UsersModelController>(UsersModelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
