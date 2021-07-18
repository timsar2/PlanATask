import { createAction } from '@ngrx/store';
import { props } from '@ngrx/store';

export const GetProfileAction = createAction('[Profile] Get Profile');

export const SetProfileAction = createAction('[Profile] Set Profile', props<{payload: boolean[]}>());
