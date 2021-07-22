import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/state/app.state';
import { BasePage } from 'src/app/shared/models/base-page';
import { SetSettingAction } from 'src/app/shared/store/actions/setting.action';
import { selectFeaturePageTitle, selectFeaturePageDescription } from 'src/app/shared/store/selectors/base-page.selector';
import { selectFeacureSetting } from 'src/app/shared/store/selectors/setting.selector';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage extends BasePage implements OnInit {
  title =  this.store$.pipe(select(selectFeaturePageTitle));
  description = this.store$.pipe(select(selectFeaturePageDescription));

  settingItems$: Observable<boolean[]> = this.store$.pipe(select(selectFeacureSetting));
  selectedItems = [false, false , false] as boolean[];

  constructor(protected store$: Store<AppState>) {
    super(store$);
  }

  ngOnInit() {
  }

  saveCustomResult(){
    let tmp = [];
    this.selectedItems.forEach(element => {
      tmp.push(element)
    });
    this.store.dispatch(SetSettingAction({payload: tmp}))
  }
}
