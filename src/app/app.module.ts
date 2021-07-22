import { APP_INITIALIZER, NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreModule } from '@ngrx/store';
import { StartupService } from './providers/startup.service';
import { PageData } from './shared/models/base-page.model';

async function  initializeApp(startupService: StartupService): Promise<void> {
  
  return new Promise(async (resolve) => {
    debugger;
  startupService.loadPageData().then((data) => console.log(data));
    // let pageData = startupService.loadPageData();
    // (await pageData).values
    // // startupService.SetPageDataState(pageData);
    resolve();
  });
}
export function configFactory(config: StartupService) {
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
  // { provide: APP_INITIALIZER, deps: [StartupService,  ], useFactory: initializeApp, multi: true}
  {
    provide: APP_INITIALIZER,
    useFactory: configFactory,
    deps: [StartupService],
    multi: true
  }
],
  bootstrap: [AppComponent],
})
export class AppModule {}
