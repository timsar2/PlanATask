import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { BasePage } from 'src/app/shared/models/base-page';
import { setProfileAction } from 'src/app/shared/store/actions/profile.action';
import { selectFeacureProfile } from 'src/app/shared/store/selectors/profile.selector';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage extends BasePage implements OnInit {

  profileData$: Observable<boolean[]> = this.store.select(selectFeacureProfile);
  form: FormGroup = new FormGroup({
    items: new FormControl([false, false , false])
  });

  constructor(protected store: Store) {
    super(store);
  }

  ngOnInit() {
  }

  saveCustomResult() {
    const tmp = [];
    this.form.value.items.forEach(element => {
      tmp.push(element);
    });
    this.store.dispatch(setProfileAction({payload: tmp}));
  }
}

