import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import {ExecModule} from '@executor/api/exec';
import {LogsModule} from '@executor/api/logs';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:27017/api'),
    // MongooseModule.forRoot('mongodb://localhost/api'),
    ExecModule,
    LogsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
