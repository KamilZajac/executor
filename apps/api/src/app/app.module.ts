import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import {ExecModule} from '@executor/api/exec';
import {LogsModule} from '../../../../libs/api/logs/src/lib/logs.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/executor'),
    ExecModule,
    LogsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
