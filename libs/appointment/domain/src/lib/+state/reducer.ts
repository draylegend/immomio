import { createFeature, createReducer, on } from '@ngrx/store';
import { appointmentActions } from './actions';
import { adapter } from './selectors';

export interface AppointmentState {
  id: string;
}

export const initialState = adapter.getInitialState();

export const reducer = createFeature({
  name: 'appointment',
  reducer: createReducer(
    initialState,

    on(appointmentActions.get, (s, { appointments }) =>
      adapter.setMany(appointments, s),
    ),
  ),
});
