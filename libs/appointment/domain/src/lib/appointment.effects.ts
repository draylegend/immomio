import { Injectable } from '@angular/core';
import { ApolloError } from '@apollo/client/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs';
import { appointmentActions } from './appointment.actions';
import { AppointmentsLoadService } from './appointments-load.service';

@Injectable()
export class AppointmentEffects {
  load$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appointmentActions.load),
      switchMap(() => this.service.watch().valueChanges),
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

  constructor(
    private actions$: Actions,
    private service: AppointmentsLoadService,
  ) {}
}
