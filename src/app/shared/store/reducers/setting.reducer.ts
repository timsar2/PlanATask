import { Action } from '@ngrx/store';
import { SettingState } from './../../models/setting.state';
import { createReducer } from '@ngrx/store';
import { on } from '@ngrx/store';
import { GetSettingAction, SetSettingAction } from '../actions/setting.action';

const inistialState: SettingState = {
    items: [false, false, false]
}

const _settingReducer = createReducer(
    inistialState,
    on(GetSettingAction, (state) => state),
    on(SetSettingAction, (state, action) => {
        return{
            ...state,
            items: action.payload
        }
    })
)

export function settingReducer (state:SettingState , action: Action){

    return _settingReducer(state, action);
}