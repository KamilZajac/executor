import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ExecLogCollectionResponse} from '@executor/interfaces';

export interface FetchLogsParams {
  page: number;
  pageSize?: number
}

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  constructor(
    private http: HttpClient,
    @Inject('apiURL') private apiURL: string
  ) { }

  fetchLogs(params: FetchLogsParams): Observable<ExecLogCollectionResponse> {
    return this.http.get<ExecLogCollectionResponse>(`${this.apiURL}/logs`, {params: {...params}});
  }

  public deleteLog(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiURL}/logs/${id}`);
  }


}
