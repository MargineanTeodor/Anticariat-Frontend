import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {
  private baseURL= "http://localhost:8082/logged/XML?id=1"
  constructor(private httpClient: HttpClient) { 
  }
  createXML():Observable<Object>
    {
      return this.httpClient.get<Object>(`${this.baseURL}`)
    }
}
