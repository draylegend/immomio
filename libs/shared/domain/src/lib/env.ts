import { InjectionToken } from '@angular/core';

export interface Env {
  api: string;
  production: boolean;
}

export const ENV = new InjectionToken<Env>('ENV');
