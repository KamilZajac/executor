import { Module } from '@nestjs/common';
import { ExecService } from './exec.service';
import { ExecController } from './exec.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {ExecLog, ExecLogSchema} from '@executor/schemas';

@Module({
  controllers: [ExecController],
  providers: [ExecService],
  exports: [ExecService],
  imports: [
    MongooseModule.forFeature([{ name: ExecLog.name, schema: ExecLogSchema }])
  ]
})
export class ExecModule {}
