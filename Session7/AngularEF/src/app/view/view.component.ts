import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/employee';
import { EmployeeService } from '../Shared/employee.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  list: Employee[];
  Eid: number;
  Ename: string;
  Pname: string;
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
    this.service.Get(this.Eid).subscribe(e => {
      this.obj = e;
      console.log(e);
      this.errmsg = ""
    })
  }

  public Add(){
    this.obj = new Employee();

    this.obj.Eid = Number(this.Eid);
    this.obj.Ename = this.Ename;
    this.obj.Pname = this.Pname;

    this.service.Add(this.obj).subscribe();
  }

  public Update(){
    this.obj = {
      Eid: Number(this.Eid),
      Ename: this.Ename,
      Pname: this.Pname
    };

    this.service.Update(this.obj).subscribe(e => {
      console.log(e);
    })
  }

  public Delete(){
    this.service.Delete(this.Eid).subscribe();
  }
}
