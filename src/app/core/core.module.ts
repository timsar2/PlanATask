import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeLogger } from 'ngrx-store-logger';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { environment } from 'src/environments/environment';
import { appReducer } from './state/app.state';

export const ngRxlogger = (reducer: ActionReducer<any>): any  => storeLogger()(reducer);

export const metaReducers: MetaReducer<any>[] = !environment.production ? [ngRxlogger] : [];

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    // vendor
    BrowserModule,

    // NgRx
    StoreModule.forRoot(
      appReducer,
      {metaReducers}
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  exports:[MainLayoutComponent]
})
export class CoreModule { }
