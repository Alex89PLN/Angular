import { Action } from '@ngrx/store';

export enum EditPropertyDummyActionTypes {
  LoadEditPropertyDummys = '[EditPropertyDummy] Load EditPropertyDummys',
  LoadEditPropertyDummysSuccess = '[EditPropertyDummy] Load EditPropertyDummys Success',
  LoadEditPropertyDummysFailure = '[EditPropertyDummy] Load EditPropertyDummys Failure',
}

export class LoadEditPropertyDummys implements Action {
  readonly type = EditPropertyDummyActionTypes.LoadEditPropertyDummys;
  constructor(public payload: { name: string, value: string }) { }
}

export class LoadEditPropertyDummysSuccess implements Action {
  readonly type = EditPropertyDummyActionTypes.LoadEditPropertyDummysSuccess;
  constructor(public data: { name: string, value: string }) { }
}

export class LoadEditPropertyDummysFailure implements Action {
  readonly type = EditPropertyDummyActionTypes.LoadEditPropertyDummysFailure;
  constructor(public payload: { error: any }) { }
}

export type EditPropertyDummyActions = LoadEditPropertyDummys | LoadEditPropertyDummysSuccess | LoadEditPropertyDummysFailure;

