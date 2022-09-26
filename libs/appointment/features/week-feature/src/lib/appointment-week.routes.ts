import { Route } from '@angular/router';
import { detailsRoutes } from '@immomio/appointment/features/details-feature';
import { providers } from '@immomio/appointment/domain';

export default {
  path: 'appointments',
  loadComponent: () =>
    import('./appointment-week-feature.component').then(
      m => m.AppointmentWeekFeatureComponent,
    ),
  children: [detailsRoutes],
  providers,
} as Route;
