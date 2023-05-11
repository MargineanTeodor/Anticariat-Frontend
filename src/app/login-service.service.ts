import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private baseURL = 'http://localhost:8082/user'
  constructor(private httpClient: HttpClient) {

   }
   login(string: String):Observable<Boolean>
    {
      return this.httpClient.get<Boolean>(`${this.baseURL}/login${string}`);
    }
    findUserByname(string:String): Observable<User>
    {
      return this.httpClient.get<User>(`${this.baseURL}/findUser${string}`);
    }
    register(string:String,user:User):Observable<Object>
    {
      return this.httpClient.put<Boolean>(`${this.baseURL}/adduser${string}`,user)
    }
    login2(id:number,user:User):Observable<Object>
    {
      return this.httpClient.put<Boolean>(`${this.baseURL}/logged?id=${id}`,user)
    }
    logout(id:number,user:User):Observable<Object>
    {
      return this.httpClient.put<Boolean>(`${this.baseURL}/logout?id=${id}`,user)
    }
    getuserByid(id:number):Observable<User>
    {
      return this.httpClient.get<User>(`${this.baseURL}/firstId?id=${id}`)
    }
    logati():Observable<User[]>
    {
      return this.httpClient.get<User[]>(`${this.baseURL}/loggedusers`)
    }
    swapPassw(id:number,string:String,user:User):Observable<Object>
    {
      return this.httpClient.put<String>(`${this.baseURL}/swapPassw?id=${id}&passw=${string}`,user);
    }
}


