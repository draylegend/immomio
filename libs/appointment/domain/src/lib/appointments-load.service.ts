import { Injectable } from '@angular/core';
import { AppointmentObject } from '@immomio/appointment/api';
import { Query } from 'apollo-angular';
import { APPOINTMENTS_LOAD } from './appointment-load.graphql';

@Injectable()
export class AppointmentsLoadService extends Query<{
  appointments: AppointmentObject[];
}> {
  override document = APPOINTMENTS_LOAD;
}
