import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom, Provider } from '@angular/core';
import { provideRouter } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import routes from './routes';

export default (env: { production: boolean }) =>
  [
    importProvidersFrom(
      HttpClientModule,
      EffectsModule.forRoot(),
      StoreModule.forRoot(
        { router: routerReducer },
        {
          runtimeChecks: {
            strictActionImmutability: true,
            strictActionSerializability: true,
            strictActionTypeUniqueness: true,
            strictActionWithinNgZone: true,
            strictStateImmutability: true,
            strictStateSerializability: true,
          },
        },
      ),
      StoreRouterConnectingModule.forRoot(),
      StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
        logOnly: env.production, // Restrict extension to log-only mode
        autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      }),
    ),
    provideRouter(routes),
  ] as Provider[];
