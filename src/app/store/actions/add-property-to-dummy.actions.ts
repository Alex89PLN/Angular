import { Action } from '@ngrx/store';

export enum AddPropertyToDummyActionTypes {
  LoadAddPropertyToDummys = '[AddPropertyToDummy] Load AddPropertyToDummys',
  LoadAddPropertyToDummysSuccess = '[AddPropertyToDummy] Load AddPropertyToDummys Success',
  LoadAddPropertyToDummysFailure = '[AddPropertyToDummy] Load AddPropertyToDummys Failure',
}

export class LoadAddPropertyToDummys implements Action {
  readonly type = AddPropertyToDummyActionTypes.LoadAddPropertyToDummys;
  constructor(public payload: { name: string, value: string }) { }
}

export class LoadAddPropertyToDummysSuccess implements Action {
  readonly type = AddPropertyToDummyActionTypes.LoadAddPropertyToDummysSuccess;
  constructor(public data: { name: string, value: string }) { }
}

export class LoadAddPropertyToDummysFailure implements Action {
  readonly type = AddPropertyToDummyActionTypes.LoadAddPropertyToDummysFailure;
  constructor(public payload: { error: any }) { }
}

export type AddPropertyToDummyActions = LoadAddPropertyToDummys | LoadAddPropertyToDummysSuccess | LoadAddPropertyToDummysFailure;

