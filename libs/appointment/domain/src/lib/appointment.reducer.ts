import { createFeature, createReducer, on } from '@ngrx/store';
import { appointmentActions } from './appointment.actions';
import { adapter } from './appointment.selectors';

export const initialState = adapter.getInitialState({
  loading: false,
  error: '',
});

export const feature = createFeature({
  name: 'appointment',
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
