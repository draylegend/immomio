import { Route } from '@angular/router';

export default {
  path: 'details',
  loadComponent: () =>
    import('./details-feature.component').then(m => m.DetailsFeatureComponent),
} as Route;
