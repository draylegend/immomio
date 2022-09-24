import { AppointmentObject } from '@immomio/appointment/api';
import { createEntityAdapter } from '@ngrx/entity';

export const adapter = createEntityAdapter<AppointmentObject>();
