import { AppointmentObject } from '@immomio/appointment/api';
import { EntityState } from '@ngrx/entity';

export const APPOINTMENT_KEY = 'appointment';

export interface State extends EntityState<AppointmentObject> {
  error: string;
  loading: boolean;
  selectedWeek: number;
  selectedYear: number;
  visibleDays: number[];
}

export interface Viewings {
  [offset: string]: AppointmentObject[];
}
