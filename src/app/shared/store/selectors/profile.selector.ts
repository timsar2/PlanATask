import { createFeatureSelector } from '@ngrx/store';

import { createSelector } from '@ngrx/store';
import { ProfileState } from 'src/app/shared/models/profile.state';
import { FeatureState } from '..';

export const PROFILE_STATE = 'profile';

const featureSelector = createFeatureSelector<FeatureState, ProfileState>(PROFILE_STATE);

export const selectFeacureProfile = createSelector(
    featureSelector,
    (state: ProfileState) => state.items
);
