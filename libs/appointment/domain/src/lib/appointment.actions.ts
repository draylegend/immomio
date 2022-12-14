import { AppointmentObject } from '@immomio/appointment/api';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const appointmentActions = createActionGroup({
  source: 'appointment',
  events: {
    load: emptyProps(),
    loadSuccess: props<{ appointments: AppointmentObject[] }>(),
    loadFailure: props<{ error: string }>(),
    show: props<{ appointmentIds: string[] }>(),
    navigateBack: emptyProps(),
  },
});

export const weekActions = createActionGroup({
  source: 'week',
  events: {
    today: emptyProps(),
    prev: emptyProps(),
    next: emptyProps(),
    setWeekYear: props<{ date: string }>(),
  },
});
