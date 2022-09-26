import { Routes } from '@angular/router';
import { appointmentRoutes } from '@immomio/appointment-features-week-feature';

export default [
  appointmentRoutes,
  {
    path: '**',
    redirectTo: 'appointments',
  },
] as Routes;
