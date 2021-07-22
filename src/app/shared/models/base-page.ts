import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/core/state/app.state';
import { selectFeaturePageDescription, selectFeaturePageTitle } from '../store/selectors/base-page.selector';

export abstract class BasePage {
    title = this.store.select(selectFeaturePageTitle);
    description = this.store.select(selectFeaturePageDescription);

    constructor(protected store: Store){
    }
}
