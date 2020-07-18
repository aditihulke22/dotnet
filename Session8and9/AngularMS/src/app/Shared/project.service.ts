import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../Models/project';

const httpOptions={headers:new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')
})}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  path: string = "http://localhost:5002/project/";

  constructor(private http: HttpClient) { }

  public GetAll(): Observable<Project[]>{
    console.log("It works");
    return this.http.get<Project[]>(this.path + "GetAll", httpOptions);
  }

  public Add(e: Project){
    return this.http.post(this.path + "Add", e, httpOptions);
  }

  public Delete(id: number){
    return this.http.delete(this.path + "Delete/" + id, httpOptions);
  }
}
