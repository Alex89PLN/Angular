import { Action } from '@ngrx/store';

export enum AddPropertyToListActionTypes {
  LoadAddPropertyToLists = '[AddPropertyToList] Load AddPropertyToLists',
  LoadAddPropertyToListsSuccess = '[AddPropertyToList] Load AddPropertyToLists Success',
  LoadAddPropertyToListsFailure = '[AddPropertyToList] Load AddPropertyToLists Failure',
}

export class LoadAddPropertyToLists implements Action {
  readonly type = AddPropertyToListActionTypes.LoadAddPropertyToLists;
  constructor(public name: string) { }
}

export class LoadAddPropertyToListsSuccess implements Action {
  readonly type = AddPropertyToListActionTypes.LoadAddPropertyToListsSuccess;
  constructor(public name: string) { }
}

export class LoadAddPropertyToListsFailure implements Action {
  readonly type = AddPropertyToListActionTypes.LoadAddPropertyToListsFailure;
  constructor(public payload: { error: any }) { }
}

export type AddPropertyToListActions = LoadAddPropertyToLists | LoadAddPropertyToListsSuccess | LoadAddPropertyToListsFailure;

