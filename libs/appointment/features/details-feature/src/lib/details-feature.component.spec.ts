import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppointmentFacade } from '@immomio/appointment/domain';
import { provideMockStore } from '@ngrx/store/testing';
import { DetailsFeatureComponent } from './details-feature.component';

describe('AppointmentFeaturesDetailsFeatureComponent', () => {
  let fixture: ComponentFixture<DetailsFeatureComponent>;
  let component: DetailsFeatureComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DetailsFeatureComponent],
      providers: [AppointmentFacade, provideMockStore()],
    });

    fixture = TestBed.createComponent(DetailsFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
