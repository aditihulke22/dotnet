import { Component, OnInit } from '@angular/core';
import { Project } from '../Models/project';
import { ProjectService } from '../Shared/project.service';


@Component({
  selector: 'app-project-view-admin',
  templateUrl: './project-view-admin.component.html',
  styleUrls: ['./project-view-admin.component.css']
})
export class ProjectViewAdminComponent implements OnInit {

  list: Project[];
  pid: number;
  pname: string;
  obj: Project;
  errmsg: string = "";

  constructor(private service: ProjectService) {
    this.service.GetAll().subscribe(i=>{
      console.log(i);
      this.list = i;
    })
  }

  ngOnInit(): void {
  }

  public Add(){
    this.obj = new Project();

    this.obj.pid = Number(this.pid);
    this.obj.pname = this.pname;

    this.service.Add(this.obj).subscribe();
  }

  public Delete(){
    this.service.Delete(this.pid).subscribe();
  }

}
