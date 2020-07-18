import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/employee';
import { EmployeeService } from '../Shared/employee.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {

  list: Employee[];
  eid: number;
  ename: string;
  pid: number;
  obj: Employee;
  errmsg: string = "";

  constructor(private service: EmployeeService) {
    this.service.GetAll().subscribe(i=>{
      console.log(i);
      this.list = i;
    })
  }

  ngOnInit(): void {
  }

  public Search(){
    this.service.Get(this.eid).subscribe(e => {
      this.obj = e;
      console.log(e);
      this.errmsg = ""
    })
  }

  public Add(){
    this.obj = new Employee();

    this.obj.eid = Number(this.eid);
    this.obj.ename = this.ename;
    this.obj.pid = Number(this.pid);

    this.service.Add(this.obj).subscribe();
  }

  public Update(){
    this.obj = {
      eid: Number(this.eid),
      ename: this.ename,
      pid: Number(this.pid)
    };

    this.service.Update(this.obj).subscribe(e => {
      console.log(e);
    })
  }

  public Delete(){
    this.service.Delete(this.eid).subscribe();
  }

}
