import { Action } from '@ngrx/store';
import { SettingState } from './../../models/setting.state';
import { createReducer } from '@ngrx/store';
import { on } from '@ngrx/store';
import { getSettingAction, setSettingAction } from '../actions/setting.action';

const inistialState: SettingState = {
    items: [false, false, false]
};

const reducer = createReducer(
    inistialState,
    on(getSettingAction, (state): SettingState => state),
    on(setSettingAction, (state, action): SettingState => ({ ...state, items: action.payload }))
);

export const settingReducer = (state: SettingState , action: Action) => reducer(state, action);
