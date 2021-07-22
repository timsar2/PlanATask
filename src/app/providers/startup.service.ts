import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { interval } from 'rxjs';

import { PageData } from '../shared/models/base-page.model';
import { getBasePageByNameAction, loadBasePagesAction } from '../shared/store/actions/base-page.action';

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  currentPagename = 'Home';
  data: PageData[] = [
    {
      name: 'Home',
      base: {
        title: 'Home Page',
        description: 'Not Set Yet!'
      }
    },
    {
      name: 'Profile',
      base: {
        title: 'Profile Page',
        description: 'Not Set Yet!'
      }
    },
    {
      name: 'Settings',
      base: {
        title: 'Settings Page',
        description: 'Not Set Yet!'
      }
    }
  ];

  constructor(private router: Router, private store: Store) {
    this.setPageDataState();
    this.router.events
          .subscribe(
            (event: NavigationEnd) => {
              if(event instanceof NavigationEnd) {
                this.currentPagename = event.urlAfterRedirects.split('/').pop();
                this.setCurrentPageState();
              }
          });

  }

  async loadPageData(): Promise<void>{
    console.log('Loading in 5 seconds');
    const a = interval(1000).subscribe((res) => console.log(res+1));

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        this.data = [
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
        this.setPageDataState();
        this.setCurrentPageState();
        resolve();
      }, 5000);
    });
  }

  setPageDataState() {
    this.store.dispatch(loadBasePagesAction({payload: this.data, pageName: this.currentPagename}));
  }

  setCurrentPageState(){
    this.store.dispatch(getBasePageByNameAction({pageName: this.currentPagename}));
  }
}
