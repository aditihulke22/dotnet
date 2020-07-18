import { Component, OnInit } from '@angular/core';
import{Employee} from '../employee';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  list:Employee[];

  constructor() {
    this.list = [
      {eid:1, ename:"abc", desig:"sde", joindate:new Date(2020, 6, 15), salary:40000}
    ];
   }

  ngOnInit(): void {
  }

}
