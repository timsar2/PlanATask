import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { BaseState, PageData } from '../shared/models/base-page.model';
import { GetBasePageByNameAction, LoadBasePagesAction } from '../shared/store/actions/base-page.action';

@Injectable({
  providedIn: 'root'
})
export class StartupService {  

  data:PageData[] = [
    {
      name: 'Home',
      base: {
        title: 'Home page',
        description: 'Not Set Yet!'
      }
    },
    {
      name: 'Profile',
      base: {
        title: 'Profile page',
        description: 'Not Set Yet!'
      }
    },
    {
      name: 'Settings',
      base: {
        title: 'Settings page',
        description: 'Not Set Yet!'
      }
    }
  ];

  constructor(private router: Router, private store$: Store<BaseState>) { }

  async loadPageData(): Promise<void>{
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        this.data = [
          {
            name: 'Home',
            base: {
              title: 'Home page',
              description: 'Welcome to PlanATechnology'
            }
          },
          {
            name: 'Profile',
            base: {
              title: 'Profile page',
              description: 'For Template Form Check Setting Page'
            }
          },
          {
            name: 'Settings',
            base: {
              title: 'Settings page',
              description: 'For Reactive Form Check Profile Page'
            }
          }
        ];
        this.SetPageDataState();
        this.SetCurrentPageState();
        resolve();
      }, 4000);
    });
  }

  SetPageDataState() {
    this.store$.dispatch(LoadBasePagesAction({payload: this.data, pageName: this.getRouteName()}));
  }

  SetCurrentPageState(){
    this.store$.dispatch(GetBasePageByNameAction({pageName: this.getRouteName()}));
  }

  private getRouteName(): string{
    this.router.events.subscribe((val) => {
      if(val instanceof NavigationEnd){
        return val['urlAfterRedirects'].split("/").pop();
      }
    });
    return 'Home';
  }
}
