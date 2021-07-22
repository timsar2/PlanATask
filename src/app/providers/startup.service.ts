import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';

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

  constructor(private router: Router, private route: ActivatedRoute, private store: Store) {
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
        this.setPageDataState();
        this.setCurrentPageState();
        resolve();
      }, 4000);
    });
  }

  setPageDataState() {
    this.store.dispatch(loadBasePagesAction({payload: this.data, pageName: this.currentPagename}));
  }

  setCurrentPageState(){
    this.store.dispatch(getBasePageByNameAction({pageName: this.currentPagename}));
  }
}
