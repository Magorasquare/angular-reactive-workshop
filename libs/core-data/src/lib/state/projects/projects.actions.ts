import { Action } from '@ngrx/store';
import { Project } from '../../projects/project.model';

export enum ProjectsActionTypes {
  ProjectSelected = '[Projects] Selected',

  LoadProjects = '[Projects] Load',
  ProjectsLoaded = '[Projects] Loaded',

  AddProject = '[Projects] Add',
  ProjectAdded = '[Projects] Added',

  UpdateProject = '[Projects] Update',
  ProjectUpdated = '[Projects] Updated',

  DeleteProject = '[Projects] Delete',
  ProjectDeleted = '[Projects] Deleted'
}

export class SelectProject implements Action {
  readonly type: ProjectsActionTypes = ProjectsActionTypes.ProjectSelected;
  readonly payload: string;
  constructor(payload: string) {
    this.payload = payload;
  }
}

export class LoadProjects implements Action {
  readonly type: ProjectsActionTypes = ProjectsActionTypes.LoadProjects;
}

export class ProjectsLoaded implements Action {
  readonly type: ProjectsActionTypes = ProjectsActionTypes.ProjectsLoaded;
  readonly payload: Project[];
  constructor(payload: Project[]) {
    this.payload = payload;
  }
}

export class AddProject implements Action {
  readonly type: ProjectsActionTypes = ProjectsActionTypes.AddProject;
  readonly payload: Project;
  constructor(payload: Project) {
    this.payload = payload;
  }
}

export class ProjectAdded implements Action {
  readonly type: ProjectsActionTypes = ProjectsActionTypes.ProjectAdded;
  readonly payload: Project;
  constructor(payload: Project) {
    this.payload = payload;
  }
}

export class UpdateProject implements Action {
  readonly type: ProjectsActionTypes = ProjectsActionTypes.UpdateProject;
  readonly payload: Project;
  constructor(payload: Project) {
    this.payload = payload;
  }
}

export class ProjectUpdated implements Action {
  readonly type: ProjectsActionTypes = ProjectsActionTypes.ProjectUpdated;
  readonly payload: Project;
  constructor(payload: Project) {
    this.payload = payload;
  }
}

export class DeleteProject implements Action {
  readonly type: ProjectsActionTypes = ProjectsActionTypes.DeleteProject;
  readonly payload: Project;
  constructor(payload: Project) {
    this.payload = payload;
  }
}

export class ProjectDeleted implements Action {
  readonly type: ProjectsActionTypes = ProjectsActionTypes.ProjectDeleted;
  readonly payload: Project;
  constructor(payload: Project) {
    this.payload = payload;
  }
}

export type ProjectsActions =
  | SelectProject
  | LoadProjects
  | ProjectsLoaded
  | AddProject
  | ProjectAdded
  | UpdateProject
  | ProjectUpdated
  | DeleteProject
  | ProjectDeleted;
