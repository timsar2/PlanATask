import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfileState } from 'src/app/shared/models/profile.state';

export const PROFILE_STATE = 'profile';

const featureSelector = createFeatureSelector<ProfileState>(PROFILE_STATE);

export const selectFeacureProfile = createSelector(
    featureSelector,
    (state: ProfileState) => state.items
);
