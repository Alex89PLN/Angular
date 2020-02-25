import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';
import {
  AddPropertyToDummyActionTypes,
  LoadAddPropertyToDummysSuccess,
  LoadAddPropertyToDummysFailure
} from '../actions/add-property-to-dummy.actions'
import {
  RemovePropertyFromDummyActionTypes,
  LoadRemovePropertyFromDummysFailure,
  LoadRemovePropertyFromDummysSuccess
} from '../actions/remove-property-from-dummy.actions'
import {
  EditPropertyDummyActionTypes,
  LoadEditPropertyDummysFailure,
  LoadEditPropertyDummysSuccess,
  LoadEditPropertyDummys
} from '../actions/edit-property-dummy.actions'
@Injectable()
export class DummyEffects {
  constructor(private actions$: Actions) { }
  addProperty = createEffect(() => {
    return this.actions$.pipe(
      ofType(AddPropertyToDummyActionTypes.LoadAddPropertyToDummys),
      mergeMap(async (data: { payload: { name: string, value: string } }) => {
        try {
          // HERE COULD BE VALIDATOR WHICH WILL THROW ERROR IF NEEDED
          const { name, value } = data.payload
          return new LoadAddPropertyToDummysSuccess({ name, value })
        } catch (error) {
          return new LoadAddPropertyToDummysFailure(error)
          // return new LoadPropertyListsFailure(error)
        }
      }),

    )
  })
  deleteProperty = createEffect(() => {
    return this.actions$.pipe(
      ofType(RemovePropertyFromDummyActionTypes.LoadRemovePropertyFromDummys),
      mergeMap(async (payload: { name: string }) => {
        try {
          // SAME AS FOR ADDPROPERTY EFFECT
          return new LoadRemovePropertyFromDummysSuccess(payload.name)

        } catch (error) {
          return new LoadRemovePropertyFromDummysFailure(error)
        }
      })
    )
  })
  editProperty = createEffect(() => {
    return this.actions$.pipe(
      ofType(EditPropertyDummyActionTypes.LoadEditPropertyDummys),
      mergeMap(async (data: LoadEditPropertyDummys) => {
        try {
          return new LoadEditPropertyDummysSuccess(data.payload)
        } catch (error) {
          return new LoadEditPropertyDummysFailure(error)
        }
      })
    )
  })
}
