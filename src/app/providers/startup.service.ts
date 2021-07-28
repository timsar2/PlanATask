import { Injectable } from '@angular/core';
import { interval } from 'rxjs';

import { PageData } from '../shared/models/base-page.model';
import { RoutingService } from './routing.service';

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor(private routingService: RoutingService) {}

  async loadPageData(): Promise<void>{
    console.log('APP_INITIALIZE in 3 seconds');
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
        this.routingService.setPageDataState(data);
        this.routingService.onRouteChange();
        resolve();
      }, 3000);
    });
  }
}
