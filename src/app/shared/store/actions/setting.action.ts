import { createAction, props } from '@ngrx/store';

export const getSettingAction = createAction('[Setting] Get Settings');

export const setSettingAction = createAction('[Setting] Set Settings', props<{payload: boolean[]}>());
