import { Action, createReducer, on } from "@ngrx/store";
import { BaseState } from "../../models/base-page.model";
import { GetBasePageByNameAction, LoadBasePagesAction } from 'src/app/shared/store/actions/base-page.action';

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

const _basePageReducer = createReducer(
    initialState,
    on( LoadBasePagesAction, (state, action) =>{
        return {
            ...state,
            data: action.payload,
            currentPageData: {...state.data.filter(x => x.name == action.pageName)[0].base}
        }
    }),
    on(GetBasePageByNameAction, (state, action) => {
        return {
            ...state,
            currentPageData: {...state.data.filter(x => x.name == action.pageName)[0].base}
        }
    })
    
)

export function basePageReducer (state:BaseState , action: Action){
    return _basePageReducer(state, action);
}