import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { providers } from '@immomio/core/domain';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

environment.production && enableProdMode();

bootstrapApplication(AppComponent, {
  providers: providers(environment),
}).catch(err => console.error(err));
