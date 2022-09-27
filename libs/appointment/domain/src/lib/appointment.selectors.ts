import { AppointmentObject } from '@immomio/appointment/api';
import { getWeekSpan } from '@immomio/appointment/utils';
import { createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { APPOINTMENT_KEY, State, Viewings } from './appointment.models';

export const adapter = createEntityAdapter<AppointmentObject>();

export const { selectAll } = adapter.getSelectors();

export const selectFeature = createFeatureSelector<State>(APPOINTMENT_KEY);

export const selectWorkingDays = createSelector(selectFeature, s => {
  const d = getWeekSpan(s.selectedWeek, s.selectedYear).start;

  return s.workingDays.map(day => {
    const date = new Date();

    date.setFullYear(s.selectedYear);
    date.setMonth(d.getMonth());
    date.setDate(d.getDate() + day);

    return date;
  });
});

export const selectWorkingHours = createSelector(
  selectFeature,
  s => s.workingHours,
);

export const selectViewings = createSelector(selectFeature, s => {
  const { start, end } = getWeekSpan(s.selectedWeek, s.selectedYear);
  const res: Viewings = {};

  selectAll(s).forEach(a => {
    const d = new Date(a.date);

    if (start.getTime() < d.getTime() && d.getTime() < end.getTime()) {
      const offset = `${d.getDay()},${d.getHours()}`;

      !res[offset] && (res[offset] = []);

      res[offset].push(a);
    }
  });

  return res;
});

export const selectWeekSpan = createSelector(selectFeature, s =>
  getWeekSpan(s.selectedWeek, s.selectedYear),
);

export const selectSelectedViewings = createSelector(selectFeature, s =>
  s.selectedViewings.map(id => s.entities[id]),
);

export const selectSelectedDate = createSelector(
  selectFeature,
  s => getWeekSpan(s.selectedWeek, s.selectedYear).start,
);
