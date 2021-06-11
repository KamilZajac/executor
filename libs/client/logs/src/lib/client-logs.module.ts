import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogsComponent } from './containers/logs/logs.component';
import {RouterModule, Routes} from '@angular/router';
import {LogsService} from '@executor/services';
import {HttpClientModule} from '@angular/common/http';
import { SingleLogComponent } from './components/single-log/single-log.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LogsComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    InfiniteScrollModule
  ],
  declarations: [
    LogsComponent,
    SingleLogComponent
  ],
  providers: [
    LogsService
  ]
})
export class ClientLogsModule {}
