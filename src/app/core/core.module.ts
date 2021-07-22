import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from 'src/environments/environment';
import { basePageReducer } from './../shared/store/reducers/base-page.reducer';
import { appReducer } from './state/app.state';
import { SETTING_STATE } from '../shared/store/selectors/setting.selector';
import { PROFILE_STATE } from '../shared/store/selectors/profile.selector';
import { settingReducer } from './../shared/store/reducers/setting.reducer';
import { profileReducer } from 'src/app/shared/store/reducers/profile.reducer';
import { PAGE_STATE_NAME } from '../shared/store/selectors/base-page.selector';


@NgModule({
  declarations: [MainLayoutComponent],
  imports: [

BrowserModule,

  StoreModule.forRoot(appReducer),
  StoreModule.forFeature(PAGE_STATE_NAME, basePageReducer),
  StoreModule.forFeature(SETTING_STATE, settingReducer),
  StoreModule.forFeature(PROFILE_STATE, profileReducer),
  StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  exports:[MainLayoutComponent]
})
export class CoreModule { }
