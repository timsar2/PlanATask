import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/core/state/app.state';
import { BasePage } from 'src/app/shared/models/base-page';
import { SetProfileAction } from 'src/app/shared/store/actions/profile.action';
import { selectFeacureProfile } from 'src/app/shared/store/selectors/profile.selector';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage extends BasePage implements OnInit {

  profileData$: Observable<boolean[]> = this.store$.pipe(select(selectFeacureProfile));
  form: FormGroup = new FormGroup({
    items: new FormControl([false, false , false])
  });

  constructor(protected store$: Store<AppState>) {
    super(store$);
  }

  ngOnInit() {
  }

  saveCustomResult(event: Event){
    console.log(this.form.value.items);
    let tmp = [];
    this.form.value.items.forEach(element => {
      tmp.push(element)
    });
    this.store$.dispatch(SetProfileAction({payload: tmp}))
  }
}

