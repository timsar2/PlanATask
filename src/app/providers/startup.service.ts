import { Injectable } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { Store } from '@ngrx/store';
import { interval } from 'rxjs';
import { filter } from 'rxjs/operators';

import { PageData } from '../shared/models/base-page.model';
import { getBasePageByNameAction, loadBasePagesAction } from '../shared/store/actions/base-page.action';

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  currentPagename = 'Home';

  constructor(private router: Router, private store: Store) {
    this.router.events.pipe(
      filter((e: Event): e is NavigationEnd => e instanceof NavigationEnd)
    ).subscribe((e: NavigationEnd) => {
        this.currentPagename = e.urlAfterRedirects.split('/').pop();
        this.setCurrentPageState();
    });
  }

  async loadPageData(): Promise<void>{
    console.log('Loading in 3 seconds');
    const a = interval(1000).subscribe((res) => console.log(res+1));

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const data: PageData[] = [
          {
            name: 'Home',
            base: {
              title: 'Home Page',
              description: 'Welcome to PlanATechnology'
            }
          },
          {
            name: 'Profile',
            base: {
              title: 'Profile Page',
              description: 'For Template Form Check Setting Page'
            }
          },
          {
            name: 'Settings',
            base: {
              title: 'Settings Page',
              description: 'For Reactive Form Check Profile Page'
            }
          }
        ];
        a.unsubscribe();
        this.setPageDataState(data);
        resolve();
      }, 3000);
    });
  }

  setPageDataState(data: PageData[]) {
    this.store.dispatch(loadBasePagesAction({payload: data, pageName: this.currentPagename}));
  }

  setCurrentPageState() {
    this.store.dispatch(getBasePageByNameAction({pageName: this.currentPagename}));
  }
}
