import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import {
  AppointmentFacade,
  initialState,
  selectViewings,
} from '@immomio/appointment/domain';
import { provideMockStore } from '@ngrx/store/testing';
import { AppointmentFeatureComponent } from './appointment-feature.component';

describe('AppointmentFeatureComponent', () => {
  let fixture: ComponentFixture<AppointmentFeatureComponent>;
  let component: AppointmentFeatureComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppointmentFeatureComponent],
      providers: [
        AppointmentFacade,
        provideNoopAnimations(),
        provideMockStore({
          initialState,
          selectors: [{ selector: selectViewings, value: [] }],
        }),
      ],
    });

    fixture = TestBed.createComponent(AppointmentFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
