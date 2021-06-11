import {FormControl, FormGroup, Validators} from '@angular/forms';

export const execBoxForm = new FormGroup({
  command: new FormControl('', Validators.required)
})
