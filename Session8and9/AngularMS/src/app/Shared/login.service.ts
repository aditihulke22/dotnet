import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Token } from '../Models/token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string='http://localhost:5002/Login/Validate/'
  constructor(private service:HttpClient) { }
  public Validate(uname:string,pwd:string):Observable<Token>
  {
    return this.service.get<Token>(this.url+uname+'/'+pwd);
  }
}
