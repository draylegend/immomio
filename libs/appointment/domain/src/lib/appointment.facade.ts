import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { appointmentActions } from './appointment.actions';
import { feature } from './appointment.reducer';

@Injectable()
export class AppointmentFacade {
  loading$ = this.store.select(feature.selectLoading);
  days$ = of([0, 1, 2, 3, 4, 5, 6]);

  constructor(private store: Store) {
    store.dispatch(appointmentActions.load());
  }
}
