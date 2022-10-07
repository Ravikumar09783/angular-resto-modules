import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import CartData from '../enum/variables'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  base_URL = 'http://localhost:3000/posts';

  getData(){
    return this.http.get<any>(`${this.base_URL}`)
  }

  validatUser(data:any){

    return this.http.post<any>(`${this.base_URL}`, data)
  }



}
