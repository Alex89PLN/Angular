import { Action } from '@ngrx/store';

export enum EditPropertyToListItemActionTypes {
  LoadEditPropertyToListItems = '[EditPropertyToListItem] Load EditPropertyToListItems',
  LoadEditPropertyToListItemsSuccess = '[EditPropertyToListItem] Load EditPropertyToListItems Success',
  LoadEditPropertyToListItemsFailure = '[EditPropertyToListItem] Load EditPropertyToListItems Failure',
}

export class LoadEditPropertyToListItems implements Action {
  readonly type = EditPropertyToListItemActionTypes.LoadEditPropertyToListItems;
  constructor(public data: { name: string, index: number }) { }
}

export class LoadEditPropertyToListItemsSuccess implements Action {
  readonly type = EditPropertyToListItemActionTypes.LoadEditPropertyToListItemsSuccess;
  constructor(public data: { name: string, index: number }) { }
}

export class LoadEditPropertyToListItemsFailure implements Action {
  readonly type = EditPropertyToListItemActionTypes.LoadEditPropertyToListItemsFailure;
  constructor(public payload: { error: any }) { }
}

export type EditPropertyToListItemActions = LoadEditPropertyToListItems
  | LoadEditPropertyToListItemsSuccess
  | LoadEditPropertyToListItemsFailure;

