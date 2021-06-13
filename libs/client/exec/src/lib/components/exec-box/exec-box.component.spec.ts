import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecBoxComponent } from './exec-box.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('ExecBoxComponent', () => {
  let component: ExecBoxComponent;
  let fixture: ComponentFixture<ExecBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecBoxComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require command field', () => {
    expect(component.form.valid).toBeFalsy()
    component.form.get('command')?.setValue('some command');
    expect(component.form.valid).toBeTruthy()
  })

  it('should emit form value on submit form', () => {
    component.form.get('command')?.setValue('some command');
    const btn = fixture.debugElement.nativeElement.querySelector('button');
    const spy = spyOn(component.onSubmit, 'emit')
    btn.click()
    expect(spy).toBeCalledWith('some command')
  });

  it('should NOT emit form value on submit form with empty form', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('button');
    const spy = spyOn(component.onSubmit, 'emit')
    btn.click()
    expect(spy).not.toHaveBeenCalled()
  });

});
