import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExecComponent } from './containers/exec.component';
import {RouterModule, Routes} from '@angular/router';
import { ExecBoxComponent } from './components/exec-box/exec-box.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ExecuteService} from '@executor/services';
import {HttpClientModule} from '@angular/common/http';
import { ExecResultComponent } from './components/exec-result/exec-result.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ExecComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    ExecComponent,
    ExecBoxComponent,
    ExecResultComponent
  ],
  providers: [
    ExecuteService
  ]
})
export class ClientExecModule {}
