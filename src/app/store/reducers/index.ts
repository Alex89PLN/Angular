import {
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
export const stateFeatureKey = 'state';

// import { userState, UserState, userReducer } from './'
import { dummyReducer, DummyState, dummyState } from './dummy.reducer'
import { propertyListReducer, PropertyListState, propertyListState } from './property-list.reducer'

export interface State {
  dummyState: DummyState,
  propertyListState: PropertyListState
}
export const state: State = {
  dummyState,
  propertyListState
};

export const reducers: ActionReducerMap<State> = {
  dummyState: dummyReducer,
  propertyListState: propertyListReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
