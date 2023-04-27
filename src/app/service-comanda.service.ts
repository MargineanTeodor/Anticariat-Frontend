import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comanda } from './comanda';

@Injectable({
  providedIn: 'root'
})
export class ServiceComandaService {
  private baseURL = 'http://localhost:8082/comanda'
  constructor(private httpClient: HttpClient) { }
  createComanda(pret : number,comanda: Comanda):Observable<Object>
  {
    return this.httpClient.post(`${this.baseURL}/createComanda?pret=${pret}`,comanda);
  }
  listaComenzi():Observable<Comanda[]>
  {
    return this.httpClient.get<Comanda[]>(`${this.baseURL}/all`);
  }
  setplatit(id: number, comanda: Comanda):Observable<Object>
  {
    return this.httpClient.post(`${this.baseURL}/updatePlata?id=${id}`,comanda);
  }
}
