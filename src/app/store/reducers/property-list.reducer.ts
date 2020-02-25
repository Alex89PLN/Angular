import { Action, createAction, props, createReducer, on } from '@ngrx/store';


import { PropertyListActionTypes } from '../actions/property-list.actions'
import { AddPropertyToListActionTypes } from '../actions/add-property-to-list.actions'
import { RemovePropertyFromListActionTypes, LoadRemovePropertyFromListsSuccess } from '../actions/remove-property-from-list.actions'
import { EditPropertyToListItemActionTypes } from '../actions/edit-property-to-list-item.actions'


export const propertyListFeatureKey = 'propertyList';

export interface PropertyListState {
  propertyList: any[]
}

export const propertyListState: PropertyListState = {
  propertyList: []
};
const setPropertyList = createAction(
  PropertyListActionTypes.LoadPropertyListsSuccess,
  props<{ list: string[] }>())
const addPropertyListItem = createAction(
  AddPropertyToListActionTypes.LoadAddPropertyToListsSuccess,
  props<{ name: string }>())
const removePropertyListItem = createAction(
  RemovePropertyFromListActionTypes.LoadRemovePropertyFromListsSuccess,
  props<{ index: number }>())
const editItemInPropertyList = createAction(
  EditPropertyToListItemActionTypes.LoadEditPropertyToListItemsSuccess,
  props<{ data: { name: string, index: number } }>())
export const propertyListReducer = createReducer(propertyListState,
  on(setPropertyList, (state, payload) => {
    return { ...state, propertyList: payload.list }
  }),
  on(addPropertyListItem, (state, payload) => {
    return { ...state, propertyList: [...state.propertyList, payload.name] }
  }),
  on(removePropertyListItem, (state, payload) => {
    const propertyList = Array.from(state.propertyList)
    propertyList.splice(payload.index, 1)
    return { ...state, propertyList }
  }),
  on(editItemInPropertyList, (state, payload) => {
    const propertyList = Array.from(state.propertyList)
    propertyList[payload.data.index] = payload.data.name

    return { ...state, propertyList }
  })
)

