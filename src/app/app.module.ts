import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { DummyObjectComponent } from './components/dummy-object/dummy-object.component';
import { DummyObjectPropertiesListComponent } from './components/dummy-object-properties-list/dummy-object-properties-list.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'

import { SharedModule } from './shared/shared.module';
import { AddPropertyListFormComponent } from './components/forms/add-property-list-form/add-property-list-form.component';
import { AddPropertyDummyFormComponent } from './components/forms/add-property-dummy-form/add-property-dummy-form.component';
import { DummyArrayComponent } from './components/dummy-array/dummy-array.component'

@NgModule({
  entryComponents: [AddPropertyListFormComponent, AddPropertyDummyFormComponent],

  declarations: [
    AppComponent,
    DummyObjectComponent,
    DummyObjectPropertiesListComponent,
    AddPropertyListFormComponent,
    AddPropertyDummyFormComponent,
    DummyArrayComponent
  ],
  imports: [

    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
