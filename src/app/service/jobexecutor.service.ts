import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JobExecutor} from '../model/jobExecutor';

@Injectable({
  providedIn: 'root'
})
export class JobexecutorService {

  private URL = 'http://localhost:8080/executeurs';

  constructor(private httpClient: HttpClient) { }

  public saveJobExecutor(jobExecutor: JobExecutor) {
    return this.httpClient.post(`${this.URL}/save`, jobExecutor);
  }

  public deleteJobExecutor(idJobExecutor: number) {
    return this.httpClient.post(`${this.URL}/${idJobExecutor}/delete`, null);
  }

  public editJobExecutor(idJobExecutor: number, jobExecutor: JobExecutor) {
    return this.httpClient.post(`${this.URL}/${idJobExecutor}/edit`, jobExecutor);
  }

  public getListJobExecutor() {
    return this.httpClient.get(`${this.URL}/list`);
  }

  public getJobExecutorById(idJobExecutor: number) {
    return this.httpClient.get(`${this.URL}/${idJobExecutor}/find`);
  }
}
