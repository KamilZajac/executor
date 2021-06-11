import { Test } from '@nestjs/testing';
import { ExecController } from './exec.controller';
import { ExecService } from './exec.service';

describe('ExecController', () => {
  let controller: ExecController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ExecService],
      controllers: [ExecController],
    }).compile();

    controller = module.get(ExecController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
