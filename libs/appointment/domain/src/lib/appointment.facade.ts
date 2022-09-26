import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { appointmentActions, weekActions } from './appointment.actions';
import { State } from './appointment.models';
import { feature } from './appointment.reducer';
import * as selectors from './appointment.selectors';

@Injectable()
export class AppointmentFacade {
  loading$ = this.store.select(feature.selectLoading);
  visibleDays$ = this.store.select(selectors.selectVisibleDays);
  viewings$ = this.store.select(selectors.selectViewings);
  weekSpan$ = this.store.select(selectors.selectWeekSpan);
  history: string[] = [];

  constructor(private store: Store<State>) {
    store.dispatch(appointmentActions.load());
  }

  prevWeek(): void {
    this.store.dispatch(weekActions.prev());
  }

  nextWeek(): void {
    this.store.dispatch(weekActions.next());
  }

  showAppointment(appointmentIds: string[]): void {
    this.store.dispatch(appointmentActions.show({ appointmentIds }));
  }

  navigateBack(): void {
    this.store.dispatch(appointmentActions.navigateback());
  }
}
