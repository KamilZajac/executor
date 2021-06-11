import {Component, Input, OnInit} from '@angular/core';
import {ExecLogDocument} from '@executor/schemas';

@Component({
  selector: 'executor-exec-result',
  templateUrl: './exec-result.component.html',
  styleUrls: ['./exec-result.component.scss']
})
export class ExecResultComponent {
  @Input() execResult: ExecLogDocument | null
}
