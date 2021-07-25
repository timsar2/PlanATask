import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BaseState } from './../../models/base-page.model';


export const PAGE_STATE_NAME = 'base';

const selectFeature = createFeatureSelector<BaseState>(PAGE_STATE_NAME);

export const selectFeaturePageTitle =  createSelector(
    selectFeature,
    (state: BaseState) => state.currentPageData.title
);

export const selectFeaturePageDescription =  createSelector(
    selectFeature,
    (state: BaseState) => state.currentPageData.description
);
