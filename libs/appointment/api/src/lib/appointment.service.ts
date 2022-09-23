import { Injectable } from '@nestjs/common';
import appointmentData from './appointment.data';
import { AppointmentObject } from './appointment.object';

@Injectable()
export class AppointmentService {
  appointments(): AppointmentObject[] {
    return appointmentData;
  }
}
