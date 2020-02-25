import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../store';
import { LoadRemovePropertyFromDummys } from '../store/actions/remove-property-from-dummy.actions'

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(
    private store: Store<State>
  ) {

  }
  deleteFromDummy(name: string) {
    if (!name) {
      throw new Error('deleteFromDummy error')
    }
    this.store.dispatch(new LoadRemovePropertyFromDummys(name))
  }
}
