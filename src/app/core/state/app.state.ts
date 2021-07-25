
import { basePageReducer } from 'src/app/shared/store/reducers/base-page.reducer';
import { BaseState } from './../../shared/models/base-page.model';

export interface AppState {
    base: BaseState;
}

export const appReducer = {
  base: basePageReducer
};
