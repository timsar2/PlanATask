import { createAction, props } from "@ngrx/store"
import { PageData } from "../../models/base-page.model";

export const LoadBasePagesAction = createAction('[Base Page] All Page Data', props<{payload: PageData[]}>());

export const GetBasePageByNameAction = createAction(
    '[Base Page] Current Page Data',
    props<{pageName: string}>()
);

