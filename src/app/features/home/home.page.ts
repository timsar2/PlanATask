import { Component, OnInit } from '@angular/core';
import { BasePage } from 'src/app/shared/models/base-page';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/state/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage extends BasePage implements OnInit {

  constructor(protected store$: Store<AppState>) {
    super(store$);
  }  

  ngOnInit() {

  }
}
