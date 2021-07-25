import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SettingState } from './../../models/setting.state';

export const SETTING_STATE = 'settings';

const featureSelector = createFeatureSelector<SettingState>(SETTING_STATE);

export const selectFeacureSetting = createSelector(
  featureSelector,
  (state: SettingState) => state.items
);
