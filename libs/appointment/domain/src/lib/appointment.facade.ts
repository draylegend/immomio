import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { appointmentActions, weekActions } from './appointment.actions';
import { State } from './appointment.models';
import { feature } from './appointment.reducer';
import * as selectors from './appointment.selectors';

@Injectable()
export class AppointmentFacade {
  loading$ = this.store.select(feature.selectLoading);
  workingDays$ = this.store.select(selectors.selectWorkingDays);
  viewings$ = this.store.select(selectors.selectViewings);
  weekSpan$ = this.store.select(selectors.selectWeekSpan);
  selectedViewings$ = this.store.select(selectors.selectSelectedViewings);
  history: string[] = [];

  constructor(private store: Store<State>) {}

  load(): void {
    this.store.dispatch(appointmentActions.load());
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
