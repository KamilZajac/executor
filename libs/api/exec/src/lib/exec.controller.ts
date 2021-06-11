import {Body, Controller, Post} from '@nestjs/common';
import {ExecService} from './exec.service';
import {ExecuteDto} from '@executor/dto';
import {ExecLog} from '@executor/schemas';

@Controller('exec')
export class ExecController {
  constructor(private execService: ExecService) {
  }

  @Post('')
  executeCommand(@Body() execBody: ExecuteDto): Promise<ExecLog> {
    return this.execService.execute(execBody)
  }
}
