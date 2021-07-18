import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import { AppState } from "src/app/core/state/app.state";

export abstract class BasePage {
    public abstract title: Observable<string>;
    public abstract description: Observable<string>;
    
    constructor(protected store: Store<AppState>){
    }
}
