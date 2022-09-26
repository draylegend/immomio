import { AppointmentObject } from '@immomio/appointment/api';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const appointmentActions = createActionGroup({
  source: 'appointment',
  events: {
    load: emptyProps(),
    loadSuccess: props<{ appointments: AppointmentObject[] }>(),
    loadFailure: props<{ error: string }>(),
  },
});

export const week = createActionGroup({
  source: 'week',
  events: {
    current: emptyProps(),
    prev: emptyProps(),
    next: emptyProps(),
  },
});
