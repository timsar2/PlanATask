import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,

    // CommonModule, remove CommonModule because it is already imported in SharedModule
    // IonicModule, remove IonicModule because it is already imported in SharedModule
    FormsModule,
    SettingsPageRoutingModule
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}
