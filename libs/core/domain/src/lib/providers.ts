import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom, Provider } from '@angular/core';
import { provideRouter } from '@angular/router';
import routes from './routes';

export default [
  importProvidersFrom(HttpClientModule),
  provideRouter(routes),
] as Provider[];
