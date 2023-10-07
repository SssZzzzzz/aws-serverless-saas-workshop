import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  orders: any = [];
  baseUrl = environment.apiGatewayUrl;
  constructor(private http: HttpClient) {}

  fetch(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/orders`);
  }

}
