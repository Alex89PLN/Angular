import { Action } from '@ngrx/store';

export enum RemovePropertyFromListActionTypes {
  LoadRemovePropertyFromLists = '[RemovePropertyFromList] Load RemovePropertyFromLists',
  LoadRemovePropertyFromListsSuccess = '[RemovePropertyFromList] Load RemovePropertyFromLists Success',
  LoadRemovePropertyFromListsFailure = '[RemovePropertyFromList] Load RemovePropertyFromLists Failure',
}

export class LoadRemovePropertyFromLists implements Action {
  readonly type = RemovePropertyFromListActionTypes.LoadRemovePropertyFromLists;
  constructor(public index: number) { }
}

export class LoadRemovePropertyFromListsSuccess implements Action {
  readonly type = RemovePropertyFromListActionTypes.LoadRemovePropertyFromListsSuccess;
  constructor(public index: number) { }
}

export class LoadRemovePropertyFromListsFailure implements Action {
  readonly type = RemovePropertyFromListActionTypes.LoadRemovePropertyFromListsFailure;
  constructor(public payload: { error: any }) { }
}

export type RemovePropertyFromListActions = LoadRemovePropertyFromLists
  | LoadRemovePropertyFromListsSuccess
  | LoadRemovePropertyFromListsFailure;

