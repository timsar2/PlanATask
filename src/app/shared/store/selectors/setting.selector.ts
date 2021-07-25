import { createFeatureSelector } from '@ngrx/store';

import { SettingState } from './../../models/setting.state';
import { createSelector } from '@ngrx/store';
import { FeatureState } from '..';

export const SETTING_STATE = 'settings';

const featureSelector = createFeatureSelector<FeatureState, SettingState>(SETTING_STATE);

export const selectFeacureSetting = createSelector(
  featureSelector,
  (state: SettingState) => state.items
);
