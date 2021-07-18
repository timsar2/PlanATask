import { createFeatureSelector } from '@ngrx/store';
import { AppState } from 'src/app/core/state/app.state';

import { SettingState } from './../../models/setting.state';
import { createSelector } from '@ngrx/store';

export const SETTING_STATE = 'settings'

const featureSelector = createFeatureSelector<AppState, SettingState>(SETTING_STATE);

export const selectFeacureSetting = createSelector(
    featureSelector,
    (state: SettingState) => state.items
)