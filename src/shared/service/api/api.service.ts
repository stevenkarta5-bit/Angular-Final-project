import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataCustomer } from '../../interface/dataCustomer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = "https://68cb878a716562cf5073cd83.mockapi.io/api/dataCust/dataCust"

  constructor(private http: HttpClient) { }

  getData(): Observable<DataCustomer[]> {
    return this.http.get<DataCustomer[]>(this.apiUrl);
  }
}
