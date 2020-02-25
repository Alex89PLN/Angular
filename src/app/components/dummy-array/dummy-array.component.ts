import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store';
import { PropertyService } from 'src/app/services/property.service';
import { MatDialog } from '@angular/material';
import {AddPropertyDummyFormComponent} from '../forms/add-property-dummy-form/add-property-dummy-form.component'

@Component({
  selector: 'app-dummy-array',
  templateUrl: './dummy-array.component.html',
  styleUrls: ['./dummy-array.component.scss']
})
export class DummyArrayComponent implements OnInit {
  dummy: Observable<any[]> = this.store.select(state => {
    console.log(state.dummyState.dummyAsArray);

    return state.dummyState.dummyAsArray
  });

  constructor(public dialog: MatDialog, private store: Store<State>, private propertyService: PropertyService) { }

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
