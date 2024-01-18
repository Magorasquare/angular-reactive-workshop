import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { ProjectsState } from './projects.reducer';
import { ProjectsService } from '../../projects/projects.service';
import {
  AddProject,
  LoadProjects,
  ProjectAdded,
  ProjectsActionTypes,
  ProjectsLoaded
} from './projects.actions';
import { map } from 'rxjs/operators';
import { Project } from '../../projects/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsEffects {
  @Effect() loadProjects$ = this.dataPersistence.fetch(
    ProjectsActionTypes.LoadProjects,
    {
      run: (action: LoadProjects , state: ProjectsState) => {
        return this.projectsService
          .all()
          .pipe(map((result: Project[]) => new ProjectsLoaded(result)));
      },
      onError: () => {}
    }
  );

  @Effect() addProjects$ = this.dataPersistence.pessimisticUpdate(
    ProjectsActionTypes.AddProject,
    {
      run: (action: AddProject, state: ProjectsState) => {
        return this.projectsService
          .create(action.payload)
          .pipe(map((result: Project) => new ProjectAdded(result)));
      },
      onError: () => {}
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ProjectsState>,
    private projectsService: ProjectsService
  ) {}
}
