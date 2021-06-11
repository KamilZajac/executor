import { Test } from '@nestjs/testing';
import { ExecService } from './exec.service';

describe('ExecService', () => {
  let service: ExecService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ExecService],
    }).compile();

    service = module.get(ExecService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
