import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../../../store'
import { AddPropertyToListActionTypes, LoadAddPropertyToLists } from '../../../store/actions/add-property-to-list.actions'
import { LoadEditPropertyToListItems } from '../../../store/actions/edit-property-to-list-item.actions'
// import {} from '../../../store/actions/'


@Component({
  selector: 'app-add-property-list-form',
  templateUrl: './add-property-list-form.component.html',
  styleUrls: ['./add-property-list-form.component.scss']
})
export class AddPropertyListFormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(null, Validators.required)
  })
  constructor(
    public dialogRef: MatDialogRef<AddPropertyListFormComponent>,
    private store: Store<State>,
    @Inject(MAT_DIALOG_DATA) public data?: { name: string, index: number },

  ) { }
  ngOnInit() {
    // SHOULD ADD VALIDATION FOR UNIQUE VALUE AND SPECIAL SYMBOLS, BUT I DON`T WANT
    if (this.data) {
      this.form.controls.name.setValue(this.data.name)
    }
  }
  submit() {
    if (!this.form.valid) {
      return
    }
    if (this.data) {
      this.store.dispatch(new LoadEditPropertyToListItems({ ...this.form.value, index: this.data.index }))
    } else {
      this.store.dispatch(new LoadAddPropertyToLists(this.form.value))
    }
    this.dialogRef.close()
  }

}
