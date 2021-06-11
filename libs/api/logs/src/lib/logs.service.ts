import {Injectable, NotFoundException} from '@nestjs/common';
import {ExecLog, ExecLogDocument} from '@executor/schemas';
import {ExecLogCollectionResponse} from '@executor/interfaces';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';

@Injectable()
export class LogsService {

  constructor(@InjectModel(ExecLog.name) private execLogDocument: Model<ExecLogDocument>) {}

  public async getLogs(page: number = 1, pageSize: number = 10) {
    const resPageSize = pageSize || 10;
    const resPage = page > 0 ? page : 1;

    const total = await this.execLogDocument.count();
    const totalPages = Math.ceil(total / pageSize );

    const entries: ExecLogDocument[] = await this.execLogDocument
      .find()
      .limit(resPageSize)
      .skip( (resPage - 1) * 10);

    if (page > totalPages){
      throw new NotFoundException()
    }

    const response : ExecLogCollectionResponse = {
      pageSize: resPageSize,
      page: resPage,
      totalPages,
      total,
      entries
    }

    return response;
  }

  public async deleteLog(id: string) {
    try{
      await this.execLogDocument.findByIdAndDelete(id)
      return true
    } catch (e) {
      throw new NotFoundException()
    }
  }
}
