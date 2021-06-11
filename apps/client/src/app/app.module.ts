import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {UiModule} from '@executor/ui';
import {environment} from '../environments/environment';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('@executor/client/exec').then(m => m.ClientExecModule)
  },
  {
    path: 'logs',
    loadChildren: () => import('@executor/client/logs').then(m => m.ClientLogsModule)

  }
]


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: 'apiURL', useValue: environment.apiURL
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
