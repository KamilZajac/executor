import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsComponent } from './logs.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FetchLogsParams, LogsService} from '@executor/services';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ExecLogCollectionResponse} from '@executor/interfaces';
import {SingleLogComponent} from '../../components/single-log/single-log.component';
import spyOn = jest.spyOn;

@Injectable()
class MockLogsService extends LogsService{
  public fetchLogs(params: FetchLogsParams): Observable<ExecLogCollectionResponse> {
    return of({
      page: 1,
      pageSize: 15,
      totalPages: 3,
      total:45,
      entries: []
    })
  }
}

describe('LogsComponent', () => {
  let component: LogsComponent;
  let fixture: ComponentFixture<LogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogsComponent, SingleLogComponent ],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: 'apiURL', useValue: 'test',
        },
        { provide: LogsService, useClass: MockLogsService },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch logs', () => {
    component.ngOnInit();
    expect(component.page).toEqual(1);
    expect(component.logs).toEqual([])
  });

  it('should ask for confirmation on delete', () => {
    window.confirm = jest.fn();
    const spy = spyOn(window, 'confirm');
    component.removeLog('123')
    expect(spy).toHaveBeenCalledWith('Do you really want to delete this log?')
  })

  it('should load more entries on scroll', () => {
    component.page = 1;
    component.maxPage = 2

    // @ts-ignore`
    const spy = spyOn(component, 'fetchLogs');
    component.onScroll()

    expect(component.page).toEqual(2);
    expect(spy).toHaveBeenCalled()
  })

});
