import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import { AppState } from "src/app/core/state/app.state";

import { ProfileState } from "../models/profile.state";
import { SettingState } from "../models/setting.state";
import { settingReducer } from './reducers/setting.reducer';
import { profileReducer } from 'src/app/shared/store/reducers/profile.reducer';

export const FEATURE_NAME = 'feature';

export const selectFeature = createFeatureSelector<State, FeatureState>(FEATURE_NAME);

export interface FeatureState {
  settings: SettingState;
  profile:  ProfileState;
}

export const featureReducers: ActionReducerMap<FeatureState, any /* put any here */> = {
  settings: settingReducer,
  profile:  profileReducer
};

export interface State extends AppState {
  feature: FeatureState;
}




