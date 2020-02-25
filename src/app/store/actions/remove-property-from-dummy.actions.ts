import { Action } from '@ngrx/store';

export enum RemovePropertyFromDummyActionTypes {
  LoadRemovePropertyFromDummys = '[RemovePropertyFromDummy] Load RemovePropertyFromDummys',
  LoadRemovePropertyFromDummysSuccess = '[RemovePropertyFromDummy] Load RemovePropertyFromDummys Success',
  LoadRemovePropertyFromDummysFailure = '[RemovePropertyFromDummy] Load RemovePropertyFromDummys Failure',
}

export class LoadRemovePropertyFromDummys implements Action {
  readonly type = RemovePropertyFromDummyActionTypes.LoadRemovePropertyFromDummys;
  constructor(public name: string) { }
}

export class LoadRemovePropertyFromDummysSuccess implements Action {
  readonly type = RemovePropertyFromDummyActionTypes.LoadRemovePropertyFromDummysSuccess;
  constructor(public name: string) { }
}

export class LoadRemovePropertyFromDummysFailure implements Action {
  readonly type = RemovePropertyFromDummyActionTypes.LoadRemovePropertyFromDummysFailure;
  constructor(public payload: { error: any }) { }
}

export type RemovePropertyFromDummyActions = LoadRemovePropertyFromDummys
  | LoadRemovePropertyFromDummysSuccess
  | LoadRemovePropertyFromDummysFailure;

