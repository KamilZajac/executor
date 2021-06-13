import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ExecLogDocument} from '@executor/schemas';

@Component({
  selector: 'executor-single-log',
  templateUrl: './single-log.component.html',
  styleUrls: ['./single-log.component.scss']
})
export class SingleLogComponent {
  @Input() log: ExecLogDocument | null = null;
  @Output() onRemove = new EventEmitter()

  public remove() {
    this.onRemove.emit();
  }
}
