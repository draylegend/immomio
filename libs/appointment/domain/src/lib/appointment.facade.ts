import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { appointmentActions } from './appointment.actions';
import { feature } from './appointment.reducer';

@Injectable()
export class AppointmentFacade {
  loading$ = this.store.select(feature.selectLoading);

  constructor(private store: Store) {
    store.dispatch(appointmentActions.load());
  }
}
