import { AppointmentObject } from '@immomio/appointment/api';
import { createActionGroup, props } from '@ngrx/store';

export const appointmentActions = createActionGroup({
  source: 'Appointment',
  events: {
    get: props<{ appointments: AppointmentObject[] }>(),
  },
});
