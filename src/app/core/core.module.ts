import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { environment } from 'src/environments/environment';
import { appReducer } from './state/app.state';


@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    // vendor
    BrowserModule,

    // NgRx
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  exports:[MainLayoutComponent]
})
export class CoreModule { }
