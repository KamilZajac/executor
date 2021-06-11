import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {execBoxForm} from './exec-box.form';

@Component({
  selector: 'executor-exec-box',
  templateUrl: './exec-box.component.html',
  styleUrls: ['./exec-box.component.scss']
})
export class ExecBoxComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<string>();
  form: FormGroup = execBoxForm;

  constructor() { }

  ngOnInit(): void {
  }

  public submit() {
    if(!this.form.valid){
      return
    }
    const {command} = this.form.value;
    this.onSubmit.emit(command);
    this.form.reset()
  }
}
