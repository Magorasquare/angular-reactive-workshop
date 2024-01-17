import { Action } from "@ngrx/store";
import { Project } from "../../projects/project.model";

export enum ProjectsActionTypes {
    ProjectSelected = '[Projects] Selected',
    AddProject = '[Projects] Add',
    UpdateProject = '[Projects] Update',
    DeleteProject = '[Projects] Delete',
};

export class SelectProject implements Action {
    readonly type: ProjectsActionTypes = ProjectsActionTypes.ProjectSelected;
    readonly payload: string;
    constructor(payload: string) {
        this.payload = payload;
    }
};

export class AddProject implements Action {
    readonly type: ProjectsActionTypes = ProjectsActionTypes.AddProject;
    readonly payload: Project;
    constructor(payload: Project) {
        this.payload = payload;
    }
};

export class UpdateProject implements Action {
    readonly type: ProjectsActionTypes = ProjectsActionTypes.UpdateProject;
    readonly payload: Project;
    constructor(payload: Project) {
        this.payload = payload;
    }
};

export class DeleteProject implements Action {
    readonly type: ProjectsActionTypes = ProjectsActionTypes.DeleteProject;
    readonly payload: Project;
    constructor(payload: Project) {
        this.payload = payload;
    }
}; 

export type ProjectsActions = SelectProject | AddProject | UpdateProject | DeleteProject;