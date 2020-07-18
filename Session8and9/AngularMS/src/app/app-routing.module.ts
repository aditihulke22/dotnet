import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { LoginComponent } from './login/login.component';
import { ProjectViewAdminComponent } from './project-view-admin/project-view-admin.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'employee', component: EmployeeViewComponent},
  {path: 'project', component: ProjectViewComponent},
  {path: 'login', component: LoginComponent},
  {path: 'project-admin', component: ProjectViewAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
