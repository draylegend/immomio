import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  AppointmentFacade,
  selectSelectedViewings,
} from '@immomio/appointment/domain';
import { provideMockStore } from '@ngrx/store/testing';
import { DetailsFeatureComponent } from './details-feature.component';

describe('AppointmentFeaturesDetailsFeatureComponent', () => {
  let fixture: ComponentFixture<DetailsFeatureComponent>;
  let component: DetailsFeatureComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DetailsFeatureComponent],
      providers: [
        AppointmentFacade,
        provideMockStore({
          selectors: [{ selector: selectSelectedViewings, value: [] }],
        }),
      ],
    });

    fixture = TestBed.createComponent(DetailsFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
