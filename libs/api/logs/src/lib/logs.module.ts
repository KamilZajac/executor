import { Module } from '@nestjs/common';
import { LogsService } from './logs.service';
import {LogsController} from './logs.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {ExecLog, ExecLogSchema} from '@executor/schemas';

@Module({
  controllers: [LogsController],
  providers: [LogsService],
  exports: [LogsService],
  imports: [
    MongooseModule.forFeature([{ name: ExecLog.name, schema: ExecLogSchema }])
  ]
})
export class LogsModule {}
