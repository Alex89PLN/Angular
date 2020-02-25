import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../services/property.service'
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { MatDialog } from '@angular/material';
import { AddPropertyDummyFormComponent } from '../forms/add-property-dummy-form/add-property-dummy-form.component';
@Component({
  selector: 'app-dummy-object',
  templateUrl: './dummy-object.component.html',
  styleUrls: ['./dummy-object.component.scss']
})
export class DummyObjectComponent implements OnInit {
  dummy: Observable<object> = this.store.select(state => {
    return state.dummyState.dummyObject
  });
  constructor(public dialog: MatDialog, private propertyService: PropertyService, private store: Store<State>) { }

  ngOnInit() {

  }
  editProperty(name: string, value: string) {
    this.dialog.open(AddPropertyDummyFormComponent, {
      data: {
        name,
        value
      }
    })
  }
  delete(name: string) {

    this.propertyService.deleteFromDummy(name)
  }

}
