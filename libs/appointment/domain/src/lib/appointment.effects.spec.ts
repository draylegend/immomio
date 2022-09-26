import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { AppointmentEffects } from './appointment.effects';
import { AppointmentFacade } from './appointment.facade';
import { AppointmentsLoadService } from './appointments-load.service';

describe('AppointmentEffects', () => {
  let actions$: Observable<Actions>;
  let effects: AppointmentEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Apollo,
        AppointmentEffects,
        AppointmentFacade,
        AppointmentsLoadService,
        provideMockActions(() => actions$),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(AppointmentEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
