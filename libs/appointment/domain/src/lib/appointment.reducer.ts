import { createFeature, createReducer, on } from '@ngrx/store';
import { appointmentActions } from './appointment.actions';
import { APPOINTMENT_KEY, State } from './appointment.model';
import { adapter } from './appointment.selectors';

export const initialState: State = adapter.getInitialState({
  loading: false,
  error: '',
});

export const feature = createFeature({
  name: APPOINTMENT_KEY,
  reducer: createReducer(
    initialState,

    on(appointmentActions.load, s =>
      adapter.setAll([], { ...s, error: '', loading: true }),
    ),

    on(appointmentActions.loadsuccess, (s, { appointments }) =>
      adapter.setMany(appointments, { ...s, error: '', loading: false }),
    ),

    on(appointmentActions.loadfailure, (s, { error }) =>
      adapter.setAll([], { ...s, error, loading: false }),
    ),
  ),
});
