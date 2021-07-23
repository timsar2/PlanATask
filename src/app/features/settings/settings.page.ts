import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { BasePage } from 'src/app/shared/models/base-page';
import { setSettingAction } from 'src/app/shared/store/actions/setting.action';
import { selectFeacureSetting } from 'src/app/shared/store/selectors/setting.selector';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage extends BasePage implements OnInit {

  settingItems$: Observable<boolean[]> = this.store.select(selectFeacureSetting);
  selectedItems = [false, false , false] as boolean[];

  constructor(protected store: Store) {
    super(store);
  }

  ngOnInit() {
  }

  saveCustomResult() {
    const tmp = [];
    this.selectedItems.forEach(element => {
      tmp.push(element);
    });
    this.store.dispatch(setSettingAction({payload: tmp}));
  }
}
