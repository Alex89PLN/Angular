import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPropertyDummyFormComponent } from './add-property-dummy-form.component';
import { SharedModule } from '../../../shared/shared.module'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Store } from '@ngrx/store';
import { State, LoadAddPropertyToDummys } from 'src/app/store';
describe('AddPropertyDummyFormComponent', () => {
  let component: AddPropertyDummyFormComponent;
  let fixture: ComponentFixture<AddPropertyDummyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [AddPropertyDummyFormComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: { name: 'test', value: 'test', direct: true } },
      { provide: MatDialogRef }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPropertyDummyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('add property via store', () => {
    // private store: Store<State>,
    let dispachCount = 0
    const service: Store<State> = TestBed.get(Store);
    const subscription = service.select(state => {
      return state.dummyState.dummyAsArray
    }).subscribe(res => {
      if (dispachCount < 5) {
        service.dispatch(new LoadAddPropertyToDummys(component.form.value))
      }
      expect(res.length).toBe(dispachCount)
      dispachCount++
    });
  })
});
