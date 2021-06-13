import {Module} from '@nestjs/common';

import {AppController} from './app.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {ExecModule} from '@executor/api/exec';
import {LogsModule} from '@executor/api/logs';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:27017/api'),
    ExecModule,
    LogsModule
  ],
  controllers: [AppController],
})
export class AppModule {
}
