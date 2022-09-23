import { Routes } from '@angular/router';

export default [
  {
    path: 'appointments',
    loadComponent: () =>
      import('@immomio/appointment/feature').then(
        m => m.AppointmentFeatureComponent,
      ),
  },
  {
    path: '**',
    redirectTo: 'appointments',
  },
] as Routes;
