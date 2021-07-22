import { select, Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import { AppState } from "src/app/core/state/app.state";
import { selectFeaturePageDescription, selectFeaturePageTitle } from "../store/selectors/base-page.selector";

export abstract class BasePage {
    title = this.store$.pipe(select(selectFeaturePageTitle));
    description = this.store$.pipe(select(selectFeaturePageDescription));
    
    constructor(protected store$: Store<AppState>){
    }
}
