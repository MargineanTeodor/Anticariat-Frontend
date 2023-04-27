import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carti } from './carti';
@Injectable({
  providedIn: 'root'
})
export class CartiService {

  private baseURL='http://localhost:8082/carte'
  private baseURL2='http://localhost:8082/carte/createCarte'
  private baseURL3='http://localhost:8082/carte/setPret'
  constructor(private httpClient: HttpClient) { }
  getCarteList():Observable<Carti[]>
  {
    return this.httpClient.get<Carti[]>(`${this.baseURL}/all`);
  }
  createCarte(carte:Carti, string: string):Observable<Object>{
    this.baseURL2+=string;
    return this.httpClient.post(`${this.baseURL2}`,carte);

  }
  updateCarte(carte:Carti,id:number):Observable<Object>{
    return this.httpClient.post(`${this.baseURL3}?id=${id}&stare=${carte.pret}`,carte);
  }
  getCarteById(id:number):Observable<Carti>
  {
    return this.httpClient.get<Carti>(`${this.baseURL}/${id}`);
  }
  deleteCarte(id:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }
  getCarteLitByName(string:String):Observable<Carti[]>
  {
    return this.httpClient.get<Carti[]>(`${this.baseURL}/allNume${string}`);
  }
  getCarteListByAutor(string:String):Observable<Carti[]>
  {
    return this.httpClient.get<Carti[]>(`${this.baseURL}/allAutor${string}`);
  }
}
