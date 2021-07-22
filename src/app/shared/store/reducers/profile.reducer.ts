import { Action } from '@ngrx/store';
import { createReducer } from '@ngrx/store';
import { on } from '@ngrx/store';
import { ProfileState } from '../../models/profile.state';
import { getProfileAction } from './../actions/profile.action';
import { setProfileAction } from 'src/app/shared/store/actions/profile.action';

const inistialState: ProfileState = {
    items: [false, false, false]
};

const reducer = createReducer(
    inistialState,
    on(getProfileAction, (state): ProfileState => state),
    on(setProfileAction, (state, action): ProfileState => ({ ...state, items: action.payload }))
);

export const profileReducer = (state: ProfileState , action: Action) => reducer(state, action);
