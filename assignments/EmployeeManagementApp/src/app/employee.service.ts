import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Employee } from "./Employee";

@Injectable({ providedIn: 'root' })

export class EmployeeService {

  private BASE_URL:String = "http://localhost:8080/SpringRestHelloWorld/";

  private Resource = "employee";

  constructor(private http: HttpClient){}

  getAllEmp():Observable<Employee[]>{

    debugger;
    return this.http.get<Employee[]>(`${this.BASE_URL}${this.Resource}`)
    .pipe(map(response => response));
  }

  addEmp(emp){
    debugger;
    return this.http.post(`${this.BASE_URL}${this.Resource}`,emp);
  }

  find(empID:number){
    return this.http.get(`${this.BASE_URL}${this.Resource}/${empID}`);
  }

  deleteEmp(empID:number){
    return this.http.delete(`${this.BASE_URL}${this.Resource}/${empID}`);
  }
}
