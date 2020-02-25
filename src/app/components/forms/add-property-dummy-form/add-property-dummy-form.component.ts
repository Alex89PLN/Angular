import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store';
import { LoadAddPropertyToDummys } from '../../../store/actions/add-property-to-dummy.actions'
import { LoadEditPropertyDummys } from '../../../store/actions/edit-property-dummy.actions'


@Component({
  selector: 'app-add-property-dummy-form',
  templateUrl: './add-property-dummy-form.component.html',
  styleUrls: ['./add-property-dummy-form.component.scss']
})
export class AddPropertyDummyFormComponent implements OnInit {
  fromUnchanged: boolean = !!this.data.value
  form = new FormGroup({
    name: new FormControl(null, Validators.required),
    value: new FormControl(null, Validators.required)
  })
  constructor(
    public dialogRef: MatDialogRef<AddPropertyDummyFormComponent>,
    private store: Store<State>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string, value?: string, direct?: boolean }
  ) { }

  ngOnInit() {
    console.log(this.data);

    // INSTEAD VALIDATION IN FORM
    // this.form.controls.value.valueChanges.subscribe(res => {
    //   if (this.data.value && !this.data.direct) {
    //     if (res === this.data.value) {
    //       this.fromUnchanged = true
    //     } else {
    //       this.fromUnchanged = false
    //     }
    //   }

    // })
    this.form.controls.name.setValue(this.data.name)
    if (this.data.value) {
      this.form.controls.value.setValue(this.data.value)
    }
  }
  addPropToDummy() {
    if (!this.form.valid) {
      return
    }
    if (this.data.value) {
      this.store.dispatch(new LoadEditPropertyDummys(this.form.value))
    } else if (this.data.direct) {
      this.store.dispatch(new LoadAddPropertyToDummys(this.form.value))
    } else {
      this.store.dispatch(new LoadAddPropertyToDummys(this.form.value))
    }

    this.dialogRef.close()
  }
}
