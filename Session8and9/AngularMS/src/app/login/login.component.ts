import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  Validate()
  {
    this.service.Validate('Admin','12345').subscribe(res=>{
      if(res.uname=='Admin')
      {
        localStorage.setItem('token',res.token);
        console.log(res);
        this.router.navigateByUrl('project-admin');
      }
      else if(res.token==""||res.token==null)
      {
        console.log('Invalid Id');
      }
      else
      {
        localStorage.setItem('token',res.token);
        console.log(res);
        this.router.navigateByUrl('project-admin');
      }
    })
  }

}
