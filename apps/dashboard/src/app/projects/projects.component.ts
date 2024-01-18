import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  AddProject,
  Customer,
  CustomersService,
  DeleteProject,
  LoadProjects,
  NotificationsService,
  Project,
  ProjectsService,
  ProjectsState,
  UpdateProject,
  initialProjects,
  selectAllProjects
} from '@workshop/core-data';
import { Observable } from 'rxjs';

const emptyProject: Project = {
  id: null,
  title: '',
  details: '',
  percentComplete: 0,
  approved: false,
  customerId: null
};

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;
  customers$: Observable<Customer[]>;
  currentProject: Project;

  constructor(
    private projectsService: ProjectsService,
    private customerService: CustomersService,
    private ns: NotificationsService,
    private store: Store<ProjectsState>
  ) {
    this.projects$ = this.store.pipe(
      select(selectAllProjects),
    );
  }

  ngOnInit() {
    this.getProjects();
    this.getCustomers();
    this.resetCurrentProject();
  }

  resetCurrentProject() {
    this.currentProject = emptyProject;
  }

  selectProject(project) {
    this.currentProject = project;
  }

  cancel(project) {
    this.resetCurrentProject();
  }

  getCustomers() {
    this.customers$ = this.customerService.all();
  }

  getProjects() {
    //this.projects$ = this.projectsService.all();
    this.store.dispatch(new LoadProjects(initialProjects));
  }

  saveProject(project) {
    if (!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }

  createProject(project) {
    this.store.dispatch(new AddProject(project));
    this.ns.emit('Project created!');
    this.resetCurrentProject();
    /* this.projectsService.create(project)
      .subscribe(response => {
        this.ns.emit('Project created!');
        this.getProjects();
        this.resetCurrentProject();
      }); */
  }

  updateProject(project) {
    this.store.dispatch(new UpdateProject(project));
    this.ns.emit('Project saved!');
    this.resetCurrentProject();
    /* this.projectsService.update(project)
      .subscribe(response => {
        this.ns.emit('Project saved!');
        this.getProjects();
        this.resetCurrentProject();
      }); */
  }

  deleteProject(project) {
    this.store.dispatch(new DeleteProject(project));
    this.ns.emit('Project deleted!');
    this.resetCurrentProject();
    /* this.projectsService.delete(project)
      .subscribe(response => {
        this.ns.emit('Project deleted!');
        this.getProjects();
        this.resetCurrentProject();
      }); */
  }
}
