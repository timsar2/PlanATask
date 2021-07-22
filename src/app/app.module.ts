import { APP_INITIALIZER, NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreModule } from '@ngrx/store';

import { StartupService } from './providers/startup.service';
import { environment } from '../environments/environment';

export function initializeApp(config: StartupService) {
  config.loadPageData();
  return  () => config.SetCurrentPageState();
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    CoreModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,

      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }), StoreModule.forRoot({}, {})],
  
providers: [
  StartupService,
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  {
    provide: APP_INITIALIZER,
    useFactory: initializeApp,
    deps: [StartupService],
    multi: true
  }
],
  bootstrap: [AppComponent],
})
export class AppModule {}
