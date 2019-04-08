import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl } from "@angular/forms";

import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  name;
  dob;
  gender;
  department;
  salary;

  constructor(private service: EmployeeService) { }

  ngOnInit() {
  }


  _calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - Date.parse(birthday);
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

  add(){
    // console.log(this.name.value);
    // console.log(this._calculateAge(this.dob.value));

    if(this.name!='' && this.dob!='' && this.gender!='' && this.department!='' && this.salary!='' ){

      console.log('if hit');

      let empObj = {
        name : this.name,
        age : this._calculateAge(this.dob),
        gender : this.gender,
        department : this.department,
        salary : this.salary
      }

      this.service.addEmp(empObj)
      .subscribe(
        data =>{
          alert('Employee Added...!!');
        },
        error =>{
          alert(error);
        }
      );
    }

    this.name="";
    this.dob="";
    this.gender="";
    this.department="";
    this.salary="";
}
}
