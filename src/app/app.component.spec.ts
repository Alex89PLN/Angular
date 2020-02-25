import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module'
import { DummyObjectComponent } from './components/dummy-object/dummy-object.component';
import { DummyObjectPropertiesListComponent } from './components/dummy-object-properties-list/dummy-object-properties-list.component';
import { AddPropertyListFormComponent } from './components/forms/add-property-list-form/add-property-list-form.component';
import { AddPropertyDummyFormComponent } from './components/forms/add-property-dummy-form/add-property-dummy-form.component';
import { DummyArrayComponent } from './components/dummy-array/dummy-array.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  afterAll(async(() => {
    fixture.destroy()
    }))
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [
        AppComponent,
        DummyObjectComponent,
        DummyObjectPropertiesListComponent,
        AddPropertyListFormComponent,
        AddPropertyDummyFormComponent,
        DummyArrayComponent
      ],
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [AddPropertyDummyFormComponent, AddPropertyListFormComponent],
      }
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));



  it('open modal and close', () => {
    const button = fixture.debugElement.nativeElement.querySelectorAll('button')[1] as HTMLButtonElement
    button.click()
    const modal = document.body.getElementsByClassName('cdk-overlay-container')
    expect(modal).toBeTruthy()
    setTimeout(() => {
      const cancelButton = document.body.getElementsByClassName('mat-warn')[0] as HTMLButtonElement
      cancelButton.click()

    }, 200);
    setTimeout(() => {
      expect(document.body.getElementsByClassName('cdk-overlay-container')[0].childElementCount).toBe(0)
    }, 1000);
  })

});
