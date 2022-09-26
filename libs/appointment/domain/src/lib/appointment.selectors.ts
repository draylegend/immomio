import { AppointmentObject } from '@immomio/appointment/api';
import { getWeekSpan } from '@immomio/appointment/utils';
import { createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { APPOINTMENT_KEY, State, Viewings } from './appointment.models';

export const adapter = createEntityAdapter<AppointmentObject>();

export const { selectAll } = adapter.getSelectors();

export const selectFeature = createFeatureSelector<State>(APPOINTMENT_KEY);

export const selectVisibleDays = createSelector(selectFeature, s =>
  s.visibleDays.map(day => ({ day, date: s.selectedWeek + day })),
);

export const selectViewings = createSelector(selectFeature, s => {
  const res: Viewings = {};

  selectAll(s).forEach(a => {
    const d = new Date(a.date);
    const offset = `${d.getDay()},${d.getHours()}`;

    !res[offset] && (res[offset] = []);

    res[offset].push(a);
  });

  return res;
});

export const selectWeekSpan = createSelector(selectFeature, s =>
  getWeekSpan(s.selectedYear, s.selectedWeek),
);
