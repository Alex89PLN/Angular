import { Action } from '@ngrx/store';

export enum PropertyListActionTypes {
  LoadPropertyLists = '[PropertyList] Load PropertyLists',
  LoadPropertyListsSuccess = '[PropertyList] Load PropertyLists Success',
  LoadPropertyListsFailure = '[PropertyList] Load PropertyLists Failure',
}

export class LoadPropertyLists implements Action {
  readonly type = PropertyListActionTypes.LoadPropertyLists;
}

export class LoadPropertyListsSuccess implements Action {
  readonly type = PropertyListActionTypes.LoadPropertyListsSuccess;
  constructor(public list: string[] ) { }
}

export class LoadPropertyListsFailure implements Action {
  readonly type = PropertyListActionTypes.LoadPropertyListsFailure;
  constructor(public payload: { error: any }) { }
}

export type PropertyListActions = LoadPropertyLists | LoadPropertyListsSuccess | LoadPropertyListsFailure;

