import { Action, createReducer, createAction, props, on } from '@ngrx/store';
import { AddPropertyToDummyActionTypes } from '../actions'
import { RemovePropertyFromDummyActionTypes } from '../actions'
import { EditPropertyDummyActionTypes } from '../actions'
export const dummyFeatureKey = 'dummy';

export interface DummyState {
  dummyObject: {
    [key: string]: any
  },
  dummyAsArray: { name: string, value: string }[]
}

export const dummyState: DummyState = {
  dummyObject: {

  },
  dummyAsArray: []
};
const addPropertyToDummy = createAction(
  AddPropertyToDummyActionTypes.LoadAddPropertyToDummysSuccess,
  props<{ data: { name: string, value: string } }>())
const deletePropertyFromDummy = createAction(
  RemovePropertyFromDummyActionTypes.LoadRemovePropertyFromDummysSuccess,
  props<{ name: string }>())
const editDummyProperty = createAction(
  EditPropertyDummyActionTypes.LoadEditPropertyDummysSuccess,
  props<{ data: { name: string, value: string } }>())
export const dummyReducer = createReducer(dummyState,
  on(addPropertyToDummy, (state, payload) => {
    const { data } = payload
    return {
      ...state,
      dummyObject: { ...state.dummyObject, [data.name]: data.value },
      dummyAsArray: [...state.dummyAsArray, { name: data.name, value: data.value }]
    }
  }),
  on(deletePropertyFromDummy, (state, payload) => {
    const { [payload.name]: deleted, ...newObj } = state.dummyObject

    const indexForDelete = state.dummyAsArray.findIndex(el => {
      return el.name === payload.name
    })


    const propertyList = Array.from(state.dummyAsArray)
    if (indexForDelete >= 0) {
      propertyList.splice(indexForDelete, 1)
    }
    return { ...state, dummyObject: newObj, dummyAsArray: propertyList }
  }),
  on(editDummyProperty, (state, payload) => {
    const indexForEdit = state.dummyAsArray.findIndex(el => {
      return el.name === payload.data.name
    })
    const arrayDummyProps = Array.from(state.dummyAsArray)
    arrayDummyProps[indexForEdit] = { ...arrayDummyProps[indexForEdit], value: payload.data.value }
    return { ...state, dummyAsArray: arrayDummyProps, dummyObject: { ...state.dummyObject, [payload.data.name]: payload.data.value } }
  })
)
