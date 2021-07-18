
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/core/state/app.state';
import { BaseState } from './../../models/base-page.model';


export const Page_STATE_NAME = 'base';

const selectFeature = createFeatureSelector<AppState, BaseState>(Page_STATE_NAME);

export const selectFeaturePageTitle =  createSelector(
    selectFeature,
    (state: BaseState) => state.currentPageData.title
)

export const selectFeaturePageDescription =  createSelector(
    selectFeature,
    (state: BaseState) => state.currentPageData.description
)