import {
  getCurrentWeekNumber,
  getFirstWeekDay,
} from '@immomio/appointment/utils';
import { createFeature, createReducer, on } from '@ngrx/store';
import { appointmentActions, weekActions } from './appointment.actions';
import { APPOINTMENT_KEY, State } from './appointment.models';
import { adapter } from './appointment.selectors';

const d = getFirstWeekDay();

export const initialState: State = adapter.getInitialState({
  error: '',
  loading: false,
  selectedWeek: getCurrentWeekNumber(),
  selectedYear: d.getFullYear(),
  selectedViewings: [],
  visibleDays: [0, 1, 2, 3, 4, 5, 6],
});

export const feature = createFeature({
  name: APPOINTMENT_KEY,
  reducer: createReducer(
    initialState,

    // Appointments
    on(appointmentActions.load, s =>
      adapter.setAll([], { ...s, error: '', loading: true }),
    ),

    on(appointmentActions.loadsuccess, (s, { appointments }) =>
      adapter.setMany(appointments, { ...s, error: '', loading: false }),
    ),

    on(appointmentActions.loadfailure, (s, { error }) =>
      adapter.setAll([], { ...s, error, loading: false }),
    ),

    on(
      appointmentActions.show,
      (s, { appointmentIds }): State => ({
        ...s,
        selectedViewings: appointmentIds,
      }),
    ),

    // Change week
    on(
      weekActions.current,
      (s): State => ({ ...s, selectedWeek: new Date().getDate() }),
    ),

    on(
      weekActions.prev,
      (s): State => ({ ...s, selectedWeek: s.selectedWeek - 1 }),
    ),

    on(
      weekActions.next,
      (s): State => ({ ...s, selectedWeek: s.selectedWeek + 1 }),
    ),
  ),
});
