import { Injectable } from '@angular/core';
import { ApolloError } from '@apollo/client/core';
import { routerActions } from '@immomio/shared/domain';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { routerNavigatedAction } from '@ngrx/router-store';
import { catchError, map, switchMap, tap } from 'rxjs';
import { appointmentActions } from './appointment.actions';
import { AppointmentFacade } from './appointment.facade';
import { AppointmentsLoadService } from './appointments-load.service';

@Injectable()
export class AppointmentEffects {
  load$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appointmentActions.load),
      tap(r => console.log(r)),
      switchMap(() => this.service.fetch()),
      map(res =>
        appointmentActions.loadsuccess({
          appointments: res.data.appointments,
        }),
      ),
      catchError(({ message }: ApolloError) => [
        appointmentActions.loadfailure({ error: message }),
      ]),
    );
  });

  showAppointmentDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appointmentActions.show),
      map(() => routerActions.go({ path: ['/appointments/details'] })),
    );
  });

  navigateBack$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appointmentActions.navigateback),
      map(() => routerActions.go({ path: ['/appointments'] })),
    );
  });

  navigationEnd$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(routerNavigatedAction),
        tap(event =>
          this.facade.history.push(event.payload.event.urlAfterRedirects),
        ),
      );
    },
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    private facade: AppointmentFacade,
    private service: AppointmentsLoadService,
  ) {}
}
