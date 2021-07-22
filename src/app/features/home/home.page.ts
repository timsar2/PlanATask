import { Component, OnInit } from '@angular/core';
import { BasePage } from 'src/app/shared/models/base-page';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage extends BasePage implements OnInit {

  constructor(protected store: Store) {
    super(store);
  }

  ngOnInit() {

  }
}
