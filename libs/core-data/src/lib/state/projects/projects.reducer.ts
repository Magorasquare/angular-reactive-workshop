import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { Project } from './../../projects/project.model';
import { ProjectsActionTypes, ProjectsActions } from './projects.actions';

export const initialProjects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    details: 'This is a sample project',
    percentComplete: 20,
    approved: false,
    customerId: null
  },
  {
    id: '2',
    title: 'Project Two',
    details: 'This is a sample project',
    percentComplete: 40,
    approved: false,
    customerId: null
  },
  {
    id: '3',
    title: 'Project Three',
    details: 'This is a sample project',
    percentComplete: 100,
    approved: true,
    customerId: null
  }
];

const createProject = (projects, project) => [...projects, project];
const updateProject = (projects, project) => projects.map(p => {
  return p.id === project.id ? Object.assign({}, project) : p;
});
const deleteProject = (projects, project) => projects.filter(w => project.id !== w.id);

// 01 - Define the shape of the states
/* export interface ProjectsState {
  projects: Project[];
  selectedProjectId: string | null;
}; */
export interface ProjectsState extends EntityState<Project> {
  selectedProjectId: string | null;
};

// 01.1 - Create entity adapter
export const adapter: EntityAdapter<Project> = createEntityAdapter<Project>()
 
// 02 - Define the initial state 
/* export const initialState: ProjectsState = {
  projects: initialProjects,
  selectedProjectId: null
}; */
export const initialState: ProjectsState = adapter.getInitialState({ selectedProjectId: null});

// 03 - Build the MOST simplest reducer
export function projectsReducer(state: ProjectsState = initialState, action: ProjectsActions): ProjectsState {
  switch (action.type) {
    case ProjectsActionTypes.LoadProjects:
      return adapter.addMany(action.payload as Project[], state); 
    case ProjectsActionTypes.AddProject:
      /* return {
        projects: createProject(state.projects, action.payload),
        selectedProjectId: state.selectedProjectId
      } */
      return adapter.addOne(action.payload as Project, state);
    case ProjectsActionTypes.UpdateProject:
      /* return {
        projects: updateProject(state.projects, action.payload),
        selectedProjectId: state.selectedProjectId
      } */
      return adapter.updateOne({
        id: (action.payload as Project).id,
        changes: action.payload as Project
      }, state);
    case ProjectsActionTypes.DeleteProject:
      /* return {
        projects: deleteProject(state.projects, action.payload),
        selectedProjectId: state.selectedProjectId
      } */
      return adapter.removeOne((action.payload as Project).id, state);
    case ProjectsActionTypes.ProjectSelected:
      return Object.assign({}, state, { selectedProjectId: action.payload })
    default:
      return state;
  }
}