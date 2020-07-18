import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { LoginComponent } from './login/login.component';
import { ProjectViewAdminComponent } from './project-view-admin/project-view-admin.component';

import { EmployeeService } from './Shared/employee.service';
import { ProjectService } from './Shared/project.service';
import { LoginService } from './Shared/login.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeViewComponent,
    ProjectViewComponent,
    LoginComponent,
    ProjectViewAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeService, ProjectService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
