import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecBoxComponent } from './exec-box.component';

describe('ExecBoxComponent', () => {
  let component: ExecBoxComponent;
  let fixture: ComponentFixture<ExecBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecBoxComponent ]
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
});
