import { AppointmentObject } from '@immomio/appointment/api';
import { createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { APPOINTMENT_KEY, State } from './appointment.model';

export const adapter = createEntityAdapter<AppointmentObject>();

export const { selectAll } = adapter.getSelectors();

export const selectFeature = createFeatureSelector<State>(APPOINTMENT_KEY);

export const selectAppointments = createSelector(selectFeature, s =>
  selectAll(s),
);
