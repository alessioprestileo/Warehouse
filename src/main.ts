// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { ServerData }               	 from './app/shared/utils/server-data';

// The usual bootstrapping imports
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { APP_ROUTER_PROVIDERS, ROUTES_DICT } from './app/app.routes';
import { AppComponent, environment } from './app/';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  APP_ROUTER_PROVIDERS,
  {provide: 'ROUTES_DICT', useValue: ROUTES_DICT},
  HTTP_PROVIDERS,
  {provide: XHRBackend, useClass: InMemoryBackendService}, // in-mem server
  {provide: SEED_DATA, useClass: ServerData}     // in-mem server data
])
  .catch(err => console.error(err));
