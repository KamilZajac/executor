import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ExecLogDocument} from '@executor/schemas';

@Injectable({
  providedIn: 'root'
})
export class ExecuteService {

  constructor(
    private http: HttpClient,
    @Inject('apiURL') private apiURL: string
  ) { }

  executeCommand(command: string): Observable<ExecLogDocument> {
    return this.http.post<ExecLogDocument>(`${this.apiURL}/exec`, {command});
  }

}
