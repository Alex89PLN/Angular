import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';
import {
  PropertyListActionTypes,
  LoadPropertyListsSuccess,
  LoadPropertyListsFailure
} from '../actions/property-list.actions'
import {
  AddPropertyToListActionTypes,
  LoadAddPropertyToListsSuccess,
  LoadAddPropertyToListsFailure
} from '../actions/add-property-to-list.actions'
import {
  RemovePropertyFromListActionTypes,
  LoadRemovePropertyFromListsSuccess,
  LoadRemovePropertyFromListsFailure,
  LoadRemovePropertyFromLists
} from '../actions/remove-property-from-list.actions'
import { PropertyListService } from '../../services/property-list.service'
import {
  EditPropertyToListItemActionTypes,
  LoadEditPropertyToListItemsSuccess,
  LoadEditPropertyToListItemsFailure
} from '../actions/edit-property-to-list-item.actions'

@Injectable()
export class PropertyListEffects {
  constructor(private actions$: Actions, private propertyListService: PropertyListService) { }
  loadPropertyList = createEffect(() => {
    return this.actions$.pipe(
      ofType(PropertyListActionTypes.LoadPropertyLists),
      mergeMap(async () => {
        try {
          const list: string[] = this.propertyListService.loadPropertyListFromLocalStorage()
          return new LoadPropertyListsSuccess(list)
        } catch (error) {
          return new LoadPropertyListsFailure(error)
        }
      }),

    )
  })
  addItemToPropertyList = createEffect(() => {
    return this.actions$.pipe(
      ofType(AddPropertyToListActionTypes.LoadAddPropertyToLists),
      mergeMap(async (payload: {
        name: {
          name: string
        }
      }) => {
        try {
          const { name } = payload
          this.propertyListService.addItemToPropertyListLocalStorage(name.name)
          return new LoadAddPropertyToListsSuccess(name.name)
        } catch (error) {
          return new LoadAddPropertyToListsFailure(error)
        }
      })
    )
  })
  removeItemFromPropertyList = createEffect(() => {
    return this.actions$.pipe(
      ofType(RemovePropertyFromListActionTypes.LoadRemovePropertyFromLists),
      mergeMap(async (payload: LoadRemovePropertyFromLists) => {
        try {
          this.propertyListService.removeItemFromPropertyListLocalStorage(payload.index)
          return new LoadRemovePropertyFromListsSuccess(payload.index)
        } catch (error) {
          console.log(55555555, error);

          return new LoadRemovePropertyFromListsFailure(error)
        }
      })
    )
  })
  editItemInPropertyList = createEffect(() => {
    return this.actions$.pipe(
      ofType(EditPropertyToListItemActionTypes.LoadEditPropertyToListItems),
      mergeMap(async (data: { data: { index: number, name: string } }) => {
        try {
          this.propertyListService.editItemInPropertyList(data.data)
          return new LoadEditPropertyToListItemsSuccess(data.data)
        } catch (error) {
          return new LoadEditPropertyToListItemsFailure(error)
        }
      })
    )
  })

}
