import { Component, OnInit } from '@angular/core';
import { BasePage } from 'src/app/shared/models/base-page';
import { select, Store } from '@ngrx/store';
import { selectFeaturePageTitle } from 'src/app/shared/store/selectors/base-page.selector';
import { BaseState } from './../../shared/models/base-page.model';
import { selectFeaturePageDescription } from './../../shared/store/selectors/base-page.selector';
import { AppState } from 'src/app/core/state/app.state';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage extends BasePage implements OnInit {
  title =  this.store$.pipe(select(selectFeaturePageTitle));
  description = this.store$.pipe(select(selectFeaturePageDescription));

  constructor(protected store$: Store<AppState>) {
    super(store$);
  }
  

  ngOnInit() {

  }
}
