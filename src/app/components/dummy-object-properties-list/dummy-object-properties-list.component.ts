import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { State } from '../../store/reducers'
import { Observable } from 'rxjs';
import { LoadPropertyLists, LoadRemovePropertyFromLists } from '../../store/actions'
import { AddPropertyListFormComponent } from '../forms/add-property-list-form/add-property-list-form.component'
import { AddPropertyDummyFormComponent } from '../forms/add-property-dummy-form/add-property-dummy-form.component'

@Component({
  selector: 'app-dummy-object-properties-list',
  templateUrl: './dummy-object-properties-list.component.html',
  styleUrls: ['./dummy-object-properties-list.component.scss']
})
export class DummyObjectPropertiesListComponent implements OnInit {
  propertyList: Observable<string[]> = this.store.select(state => {
    return state.propertyListState.propertyList
  });
  constructor(public dialog: MatDialog, private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new LoadPropertyLists())
  }
  openAddPropertyDialog(name?: string, index?: number) {
    this.dialog.open(AddPropertyListFormComponent, index && { data: { name, index } } || null);
  }
  openAddPropertyToDummyDialog(name: string) {
    this.dialog.open(AddPropertyDummyFormComponent, {
      data: {
        name
      }
    })
  }
  openAddPropertyToDummyDialogDirect() {
    this.dialog.open(AddPropertyDummyFormComponent, {
      data: {
        direct: true
      }
    })
  }
  deleteProperty(index: number) {
    this.store.dispatch(new LoadRemovePropertyFromLists(index))
  }
}
