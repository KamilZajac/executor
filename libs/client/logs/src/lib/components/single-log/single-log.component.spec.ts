import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLogComponent } from './single-log.component';

describe('SingleLogComponent', () => {
  let component: SingleLogComponent;
  let fixture: ComponentFixture<SingleLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
