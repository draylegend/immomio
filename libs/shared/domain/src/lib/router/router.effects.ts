import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { routerActions } from './router.actions';

@Injectable()
export class RouterEffects {
  go$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(routerActions.go),
        tap(({ path, ...rest }) => this.router.navigate(path, rest)),
      );
    },
    { dispatch: false },
  );

  constructor(private actions$: Actions, private router: Router) {}
}
