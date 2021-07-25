import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { ProfilePageRoutingModule } from './profile-routing.module';
import { ProfilePage } from './profile.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { PROFILE_STATE } from 'src/app/shared/store/selectors/profile.selector';
import { profileReducer } from 'src/app/shared/store/reducers/profile.reducer';

@NgModule({
  imports: [
    SharedModule,

    // CommonModule, remove CommonModule because it is already imported in SharedModule
    // IonicModule, remove IonicModule because it is already imported in SharedModule
    FormsModule,
    ReactiveFormsModule,
    ProfilePageRoutingModule,

    // NgRx
    StoreModule.forFeature(PROFILE_STATE, profileReducer),
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
