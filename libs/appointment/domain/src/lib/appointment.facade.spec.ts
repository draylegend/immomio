import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AppointmentFacade } from './appointment.facade';
import { initialState } from './appointment.reducer';

describe('AppointmentsLoadService', () => {
  let service: AppointmentFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppointmentFacade, provideMockStore({ initialState })],
    });

    service = TestBed.inject(AppointmentFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
