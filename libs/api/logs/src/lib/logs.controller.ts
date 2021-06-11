import {Controller, Delete, Get, Param, Query} from '@nestjs/common';
import {ExecLogCollectionResponse} from '@executor/interfaces';
import {LogsService} from './logs.service';

@Controller('logs')
export class LogsController {

  constructor(private logsService: LogsService) {
  }
  @Get('')
  getLogs(
    @Query('page') page: string,
    @Query('pageSize') pageSize: string
  ): Promise<ExecLogCollectionResponse> {
    return this.logsService.getLogs(parseInt(page), parseInt(pageSize))
  }

  @Delete(':id')
  deleteLog(
    @Param('id') id: string
  ): Promise<boolean> {
    return this.logsService.deleteLog(id)
  }
}
