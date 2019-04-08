import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl } from "@angular/forms";

import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'EMPLOYEE MANAGEMENT APP';
  employees:Employee[];
  //empObj:Employee;



  constructor(private service: EmployeeService){}

  ngOnInit(){
    this.getAllEmployees();
  }

  _calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - Date.parse(birthday);
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

  getAllEmployees(){
    debugger;
    this.service.getAllEmp()
    .subscribe(
      data =>{
        debugger;
        this.employees = data;
      },
      error =>{
        console.log(error);
        //alert(error);
      });
  }

   getEmp(empID:number){
    this.service.find(empID)
    .subscribe(
      data =>
      {
        console.log(data);
      }
      , error =>
      {
        console.log(error);
      });
  }

  delete(empID:number){
    this.service.deleteEmp(empID)
    .subscribe(
      data =>
      {
        console.log(data);
        this.getAllEmployees();
      }
      , error =>
      {
        console.log(error);
      });
  }

}
