import { Action } from "@ngrx/store";

export enum RepoActionTypes {
  Load = "[Repo] Load"
}

// action creators
export class Load implements Action {
  type = RepoActionTypes.Load;
}

export type RepoActions = Load;
