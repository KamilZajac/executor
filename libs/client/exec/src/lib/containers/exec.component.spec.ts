import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ExecComponent} from './exec.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ExecBoxComponent} from '../components/exec-box/exec-box.component';
import {ExecResultComponent} from '../components/exec-result/exec-result.component';
import {DebugElement, Injectable} from '@angular/core';
import {By} from '@angular/platform-browser';
import {ExecuteService} from '@executor/services';
import {Observable, of} from 'rxjs';
import {ExecLogDocument} from '@executor/schemas';

@Injectable()
class MockExecService extends ExecuteService{
  public executeCommand(command: string): Observable<ExecLogDocument> | any{
    return of(command)
  }
}
export function findComponent<T>(
  fixture: ComponentFixture<T>,
  selector: string,
): DebugElement {
  return fixture.debugElement.query(By.css(selector));
}

describe('ExecComponent', () => {
  let component: ExecComponent;
  let fixture: ComponentFixture<ExecComponent>;
  let execServiceMock: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExecComponent, ExecBoxComponent, ExecResultComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      providers: [
        {
          provide: 'apiURL', useValue: 'test',
        },
        { provide: ExecuteService, useClass: MockExecService },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    execServiceMock = {
      executeCommand: jest.fn(() => of([]))
    }
    fixture = TestBed.createComponent(ExecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render exec-box and exec-result', () => {
    const execBox = findComponent(fixture, 'executor-exec-box');
    const execResult = findComponent(fixture, 'executor-exec-result');
    expect(execBox).toBeTruthy();
    expect(execResult).toBeTruthy()
  });

  it('should call onFormSubmitted on child event emit', () => {
    const box = findComponent(fixture, 'executor-exec-box');
    const spy = spyOn(component, 'onFormSubmitted');
    box.triggerEventHandler('onSubmit', 'test')
    expect(spy).toHaveBeenCalledWith('test')
  });

  it('should call exec service on onFormSubmitted', done => {
    component.onFormSubmitted('some command')

    component.execResult$.subscribe( res => {
      expect(res).toEqual('some command')
      done();
    })
  })


});
