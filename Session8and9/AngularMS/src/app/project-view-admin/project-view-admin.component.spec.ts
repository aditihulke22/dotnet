import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectViewAdminComponent } from './project-view-admin.component';

describe('ProjectViewAdminComponent', () => {
  let component: ProjectViewAdminComponent;
  let fixture: ComponentFixture<ProjectViewAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectViewAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectViewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
