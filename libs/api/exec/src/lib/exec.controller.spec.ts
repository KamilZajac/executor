import { Test } from '@nestjs/testing';
import { ExecController } from './exec.controller';
import { ExecService } from './exec.service';
import * as schemas from '@executor/schemas'
import {InjectModel} from '@nestjs/mongoose';
import {ExecLog, ExecLogDocument} from '@executor/schemas';
import {Model} from 'mongoose';

class ExecServiceMock extends ExecService{
  execute =  (body: { command: string }) => body.command

  constructor(@InjectModel(ExecLog.name) private execLogDocument: Model<ExecLogDocument>) {
    super(execLogDocument);
  }
}

describe('ExecController', () => {
  let controller: ExecController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ExecService,
        {
          provide: ExecService,
          useClass: ExecServiceMock
        }],
      controllers: [ExecController],
    }).compile();

    controller = module.get(ExecController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });

  it('should call exec service on executeCommand', () => {
    expect(controller.executeCommand({command: 'some command'})).toBe('some command')
  })
});
