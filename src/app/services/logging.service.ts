import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  httpClient: HttpClient = inject(HttpClient);

  logError(data: { statusCode: number; errorMessage; dateTime: Date }) {
    this.httpClient.post(`${environment.firebaseBaseUrl}/log.json`, data).subscribe();
  }

  fetchErrors() {
    this.httpClient.get(`${environment.firebaseBaseUrl}/log.json`).subscribe((data) => {
      console.log(data);
    });
  }
}
