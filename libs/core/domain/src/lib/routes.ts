import { Routes } from '@angular/router';
import { appointmentRoutes } from '@immomio/appointment/feature';

export default [
  appointmentRoutes,
  {
    path: '**',
    redirectTo: 'appointments',
  },
] as Routes;
