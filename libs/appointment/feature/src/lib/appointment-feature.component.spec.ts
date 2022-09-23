import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppointmentFeatureComponent } from './appointment-feature.component';

describe('AppointmentFeatureComponent', () => {
  let fixture: ComponentFixture<AppointmentFeatureComponent>;
  let component: AppointmentFeatureComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppointmentFeatureComponent],
    });

    fixture = TestBed.createComponent(AppointmentFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
