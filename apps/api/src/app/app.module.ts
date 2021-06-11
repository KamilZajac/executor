import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import {ExecModule} from '@executor/exec';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/executor'),
    ExecModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
