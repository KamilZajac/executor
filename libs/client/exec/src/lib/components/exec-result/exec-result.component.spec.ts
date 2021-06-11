import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecResultComponent } from './exec-result.component';

describe('ExecResultComponent', () => {
  let component: ExecResultComponent;
  let fixture: ComponentFixture<ExecResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
