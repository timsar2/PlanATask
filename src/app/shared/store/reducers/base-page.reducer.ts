import { Action, createReducer, on } from '@ngrx/store';

import { BaseState } from '../../models/base-page.model';
import { getBasePageByNameAction, loadBasePagesAction } from 'src/app/shared/store/actions/base-page.action';

export const initialState: BaseState = {
    data: [
        {
            name: 'Home',
            base: {
                title: 'Home Page',
                description: 'Not Set Yet!'
            }
        }
    ],
    currentPageData: {
        title: 'Home Page',
        description: 'Not Set Yet!'
    }
};

const reducer = createReducer(
    initialState,
    on(loadBasePagesAction, (state, action): BaseState =>({
      ...state,
      data: action.payload,
      currentPageData: {...state.data.filter(x => x.name === action.pageName)[0].base}
    })),
    on(getBasePageByNameAction, (state, action): BaseState => ({
      ...state,
      currentPageData: {...state.data.filter(x => x.name === action.pageName)[0].base}
    }))
);

export const basePageReducer = (state: BaseState , action: Action) => reducer(state, action);
