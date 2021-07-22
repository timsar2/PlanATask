import { createAction } from '@ngrx/store';
import { props } from '@ngrx/store';

export const getProfileAction = createAction('[Profile] Get Profile');

export const setProfileAction = createAction('[Profile] Set Profile', props<{payload: boolean[]}>());
