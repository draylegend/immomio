import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import {
  AppointmentFacade,
  initialState,
  selectViewings,
  selectVisibleDays,
  selectWeekSpan,
} from '@immomio/appointment/domain';
import { provideMockStore } from '@ngrx/store/testing';
import { AppointmentWeekFeatureComponent } from './appointment-week-feature.component';

describe('AppointmentFeaturesWeekFeatureComponent', () => {
  let fixture: ComponentFixture<AppointmentWeekFeatureComponent>;
  let component: AppointmentWeekFeatureComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppointmentWeekFeatureComponent],
      providers: [
        AppointmentFacade,
        provideNoopAnimations(),
        provideMockStore({
          initialState,
          selectors: [
            { selector: selectViewings, value: [] },
            { selector: selectVisibleDays, value: [] },
            { selector: selectWeekSpan, value: { selectedYear: 2022 } },
          ],
        }),
      ],
    });

    fixture = TestBed.createComponent(AppointmentWeekFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
