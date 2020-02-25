import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyObjectPropertiesListComponent } from './dummy-object-properties-list.component';
import { SharedModule } from '../../shared/shared.module'
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { AddPropertyDummyFormComponent } from '../forms/add-property-dummy-form/add-property-dummy-form.component'
import { MatDialog } from '@angular/material';
describe('DummyObjectPropertiesListComponent', () => {
  let component: DummyObjectPropertiesListComponent;
  let fixture: ComponentFixture<DummyObjectPropertiesListComponent>;
  afterAll(async(() => {
    fixture.destroy()
  }))
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [DummyObjectPropertiesListComponent, AddPropertyDummyFormComponent],
      providers: [MatDialog]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [AddPropertyDummyFormComponent],
      }
    }).compileComponents()
    fixture = TestBed.createComponent(DummyObjectPropertiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  ));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(DummyObjectPropertiesListComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain buttons', () => {
    const buttons = fixture.debugElement.nativeElement.querySelectorAll('button')
    expect(buttons.length).toBe(2)

    expect(buttons[0].innerText).toBe('add new property')
    expect(buttons[1].innerText).toBe('add new property to object')
  })

});
