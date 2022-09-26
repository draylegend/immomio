import { AppointmentObject } from '@immomio/appointment/api';
import { EntityState } from '@ngrx/entity';

export const APPOINTMENT_KEY = 'appointment';

export interface State extends EntityState<AppointmentObject> {
  firstWeekDay: number;
  error: string;
  loading: boolean;
  visibleDays: number[];
}

export interface Viewings {
  [offset: string]: AppointmentObject[];
}
