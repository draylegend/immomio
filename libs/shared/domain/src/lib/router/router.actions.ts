import { NavigationExtras } from '@angular/router';
import { createActionGroup, props } from '@ngrx/store';

export const routerActions = createActionGroup({
  source: 'router',
  events: {
    go: props<{ path: string[] } & NavigationExtras>(),
  },
});
