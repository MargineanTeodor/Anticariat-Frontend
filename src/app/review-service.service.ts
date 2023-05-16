import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from './review';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewServiceService {
  private baseURL= "http://localhost:8082/review"
  constructor(private httpClient: HttpClient) { }
  addReview(string: String,id:number, review:Review):Observable<Review>{
    return this.httpClient.put<Review>(`${this.baseURL}/add?id=${id}&string=${string}`,review);
  }
  getList(id:number):Observable<Review[]>
  {
    return this.httpClient.get<Review[]>(`${this.baseURL}/all?id=${id}`);
  }
}
