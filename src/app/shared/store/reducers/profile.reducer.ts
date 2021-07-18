import { Action } from '@ngrx/store';
import { createReducer } from '@ngrx/store';
import { on } from '@ngrx/store';
import { ProfileState } from '../../models/profile.state';
import { GetProfileAction } from './../actions/profile.action';
import { SetProfileAction } from 'src/app/shared/store/actions/profile.action';

const inistialState: ProfileState = {
    items: [false, false, false]
}

const _profileReducer = createReducer(
    inistialState,
    on(GetProfileAction, (state) => state),
    on(SetProfileAction, (state, action) => {
        return{
            ...state,
            items: action.payload
        }
    })
)

export function profileReducer (state:ProfileState , action: Action){

    return _profileReducer(state, action);
}