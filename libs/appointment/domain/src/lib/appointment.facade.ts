import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { appointmentActions } from './appointment.actions';
import { State } from './appointment.models';
import { feature } from './appointment.reducer';
import * as selectors from './appointment.selectors';

@Injectable()
export class AppointmentFacade {
  loading$ = this.store.select(feature.selectLoading);
  days$ = of([0, 1, 2, 3, 4, 5, 6]);
  viewings$ = this.store.select(selectors.selectViewings);

  constructor(private store: Store<State>) {
    store.dispatch(appointmentActions.load());
  }
}
