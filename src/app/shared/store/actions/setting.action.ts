import { createAction } from '@ngrx/store';
import { props } from '@ngrx/store';

export const GetSettingAction = createAction('[Setting] Get Settings');

export const SetSettingAction = createAction('[Setting] Set Settings', props<{payload: boolean[]}>());
