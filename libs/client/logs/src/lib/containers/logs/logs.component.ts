import { Component, OnInit } from '@angular/core';
import {LogsService} from '@executor/services';
import {ExecLogDocument} from '@executor/schemas';

@Component({
  selector: 'executor-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  logs: ExecLogDocument[] = [];
  page: number = 1;
  maxPage: number;

  constructor(private logsService: LogsService) { }

  ngOnInit(): void {
    this.fetchLogs()
  }

  private fetchLogs() {
    this.logsService.fetchLogs({page: this.page}).subscribe(logs => {
      this.maxPage = logs.totalPages
      this.logs.push(...logs.entries)
    })
  }

  public removeLog(id: string) {
    const confirmDelete = confirm('Do you really want to delete this log?');

    if(confirmDelete) {
      this.logsService.deleteLog(id).subscribe(() => {
        this.logs = this.logs.filter(log => log._id !== id)
      })
    }
  }

  public onScroll() {
    if(this.page !== this.maxPage) {
      this.page++;
      this.fetchLogs()
    }
  }
}
