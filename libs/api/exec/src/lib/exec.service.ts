import {Injectable} from '@nestjs/common';
import {ExecuteDto} from '@executor/dto';
import {exec} from 'child_process';
import {ExecLog, ExecLogDocument} from '@executor/schemas';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';

interface ExecResponse {
  status: string,
  response:  string
}

@Injectable()
export class ExecService {

  constructor(@InjectModel(ExecLog.name) private execLogDocument: Model<ExecLogDocument>) {}

  public escapeShell(cmd): string {
    return '"' + cmd.replace(/(["'$`\\])/g, '\\$1') + '"';
  };

  public async execPromise(command): Promise<ExecResponse> {
    return new Promise((res) => {
      exec(this.escapeShell(command), async (err, stdout, stderr) => {
        if(err) {
          res({
            status: 'error',
            response:  err.toString()
          })
        }
        if(stdout) {
          res({
            status: 'success',
            response:  stdout
          })
        }
      });
    })
  }

  public async execute(execBody: ExecuteDto) {
    const execLog = new this.execLogDocument()
    const execResponse = await this.execPromise(execBody.command);

    execLog.status = execResponse.status;
    execLog.response = execResponse.response
    execLog.command = execBody.command

    await execLog.save();
    return execLog
  }
}
