import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  httpClient: HttpClient = inject(HttpClient);

  logError(data: { statusCode: number; errorMessage; dateTime: Date }) {
    debugger;
    this.httpClient
      .post(`${environment.firebaseTaskManagementDbBaseUrl}/log.json`, data)
      .subscribe();
  }

  fetchErrors() {
    this.httpClient
      .get(`${environment.firebaseTaskManagementDbBaseUrl}/log.json`)
      .subscribe((data) => {});
  }
}
