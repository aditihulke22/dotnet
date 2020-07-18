import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../Models/employee';

const httpOptions= {
  headers: new HttpHeaders({'Content-Type': 'application/json'}) 
}

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  path: string = "http://localhost:51674/api/employee/";

  constructor(private http: HttpClient) { }

  public GetAll(): Observable<Employee[]>{
    console.log("It works");
    return this.http.get<Employee[]>(this.path + "GetAll");
  }

  public Get(id: number): Observable<Employee>{
    return this.http.get<Employee>(this.path + "GetByID/" + id);
  }

  public Add(e: Employee){
    return this.http.post(this.path + "Add", e, httpOptions);
  }

  public Update(e: Employee): Observable<any>{
    return this.http.put<any>(this.path + "Update", e, httpOptions);
  }

  public Delete(id: number){
    return this.http.delete(this.path + "Delete/" + id);
  }
}