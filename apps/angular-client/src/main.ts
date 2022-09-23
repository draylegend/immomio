import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideCore } from '@immomio/core/domain';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

environment.production && enableProdMode();

bootstrapApplication(AppComponent, {
  providers: provideCore(environment),
}).catch(err => console.error(err));
