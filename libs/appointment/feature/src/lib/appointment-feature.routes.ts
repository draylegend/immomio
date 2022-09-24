import { Route } from '@angular/router';
import { providers } from '@immomio/appointment/domain';

export default {
  path: 'appointments',
  loadComponent: () =>
    import('./appointment-feature.component').then(
      m => m.AppointmentFeatureComponent,
    ),
  providers,
} as Route;
