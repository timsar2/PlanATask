import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { SettingsPageRoutingModule } from './settings-routing.module';
import { SettingsPage } from './settings.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { SETTING_STATE } from 'src/app/shared/store/selectors/setting.selector';
import { settingReducer } from 'src/app/shared/store/reducers/setting.reducer';

@NgModule({
  imports: [
    SharedModule,

    // CommonModule, remove CommonModule because it is already imported in SharedModule
    // IonicModule, remove IonicModule because it is already imported in SharedModule
    FormsModule,
    SettingsPageRoutingModule,

    // NgRx
    StoreModule.forFeature(SETTING_STATE, settingReducer)
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}
