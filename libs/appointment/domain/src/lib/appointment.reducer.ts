import { getFirstWeekDay, getWeekNumber } from '@immomio/appointment/utils';
import { createFeature, createReducer, on } from '@ngrx/store';
import { appointmentActions, weekActions } from './appointment.actions';
import { APPOINTMENT_KEY, State } from './appointment.models';
import { adapter } from './appointment.selectors';

export const initialState: State = adapter.getInitialState({
  error: '',
  loading: false,
  selectedWeek: getWeekNumber(),
  selectedYear: getFirstWeekDay().getFullYear(),
  selectedViewings: [],
  workingDays: [0, 1, 2, 3, 4, 5, 6],
  workingHours: [
    '8:00',
    '9:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
  ],
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
    on(weekActions.setweekyear, (s, { date }): State => {
      const d: Date = new Date(date);

      return {
        ...s,
        selectedWeek: getWeekNumber(d),
        selectedYear: d.getFullYear(),
      };
    }),

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
