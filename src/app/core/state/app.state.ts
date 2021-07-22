
import { ProfileState } from 'src/app/shared/models/profile.state';
import { basePageReducer } from 'src/app/shared/store/reducers/base-page.reducer';
import { profileReducer } from 'src/app/shared/store/reducers/profile.reducer';
import { BaseState } from './../../shared/models/base-page.model';
import { SettingState } from './../../shared/models/setting.state';
import { settingReducer } from './../../shared/store/reducers/setting.reducer';

export interface AppState {
    base: BaseState;
    settings: SettingState;
    profile: ProfileState;
}

export const appReducer = {
  basePageReducer,
  settingReducer,
  profileReducer
};
