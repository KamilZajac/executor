import { Component, OnInit } from '@angular/core';
import {ExecuteService} from '@executor/services';
import {Observable} from 'rxjs';
import {ExecLogDocument} from '@executor/schemas';

@Component({
  selector: 'executor-exec',
  templateUrl: './exec.component.html',
  styleUrls: ['./exec.component.scss']
})
export class ExecComponent {
  execResult$: Observable<ExecLogDocument>;

  constructor(private execService: ExecuteService) { }

  public onFormSubmitted(command: string) {
    this.execResult$ = this.execService.executeCommand(command)
  }
}
