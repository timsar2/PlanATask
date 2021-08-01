import { createAction, props } from '@ngrx/store';
import { PageData } from '../../models/base-page.model';

export const loadBasePagesAction = createAction('[Base] Load All Page Data',
    props<{payload: PageData[]; pageName: string}>());

export const getBasePageByNameAction = createAction(
    '[Base] Set Current Page Data',
    props<{pageName: string}>()
);

