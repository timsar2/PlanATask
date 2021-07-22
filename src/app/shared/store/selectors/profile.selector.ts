import { createFeatureSelector } from '@ngrx/store';
import { AppState } from 'src/app/core/state/app.state';

import { createSelector } from '@ngrx/store';
import { ProfileState } from 'src/app/shared/models/profile.state';

export const PROFILE_STATE = 'profile';

const featureSelector = createFeatureSelector<AppState, ProfileState>(PROFILE_STATE);

export const selectFeacureProfile = createSelector(
    featureSelector,
    (state: ProfileState) => state.items
);
