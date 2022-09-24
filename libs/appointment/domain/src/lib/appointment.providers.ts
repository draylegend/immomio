import { importProvidersFrom } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Apollo } from 'apollo-angular';
import { AppointmentEffects } from './appointment.effects';
import { AppointmentFacade } from './appointment.facade';
import { feature } from './appointment.reducer';
import { AppointmentsLoadService } from './appointments-load.service';

export default [
  Apollo,
  AppointmentFacade,
  AppointmentsLoadService,
  importProvidersFrom(
    EffectsModule.forFeature([AppointmentEffects]),
    StoreModule.forFeature(feature.name, feature.reducer),
  ),
];
