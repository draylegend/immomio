import { Route } from '@angular/router';
import { providers } from '@immomio/appointment/domain';

export default {
  path: 'appointments',
  loadComponent: () =>
    import('./appointment-week-feature.component').then(
      m => m.AppointmentWeekFeatureComponent,
    ),
  providers,
} as Route;
