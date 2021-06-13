import {Component, EventEmitter, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {execBoxForm} from './exec-box.form';

@Component({
  selector: 'executor-exec-box',
  templateUrl: './exec-box.component.html',
  styleUrls: ['./exec-box.component.scss']
})
export class ExecBoxComponent {
  @Output() onSubmit = new EventEmitter<string>();
  form: FormGroup = execBoxForm;

  public submit() {
    if(!this.form.valid){
      return
    }
    const {command} = this.form.value;
    this.onSubmit.emit(command);
    this.form.reset()
  }
}
