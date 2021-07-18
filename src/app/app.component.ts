import { Component, OnInit, Pipe } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';

import { Store } from '@ngrx/store';
import { PageData, BaseState } from './shared/models/base-page.model';
import { LoadBasePagesAction } from './shared/store/actions/base-page.action';
import { GetBasePageByNameAction } from 'src/app/shared/store/actions/base-page.action';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<BaseState>,
    private router: Router,
    private platform: Platform,
  ) {

    //  detecte routing change and select base page data as needed.
    this.router.events.subscribe((val) => {
      if(val instanceof NavigationEnd){
        const pageName = val['urlAfterRedirects'].split("/").pop();
        this.store.dispatch(GetBasePageByNameAction({pageName}));
        return;
      }
    });
  }

  ngOnInit(): void {
    this.initializeApp();
  }

  async initializeApp() {
    this.platform.ready().then(async () => {
      if (Capacitor.isPluginAvailable('StatusBar')) {
        await StatusBar.setStyle({ style: Style.Light });
        StatusBar.show()
      };
      
      SplashScreen.hide();
      const pageData = await this.getPageData();
      this.GetPageData(pageData);
    });
  }
  
  async getPageData(): Promise<PageData[]> {
    const data:PageData[] = [
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
    ]
    return  data;   
  }

  GetPageData(pageData: PageData[]) {
    this.store.dispatch(LoadBasePagesAction({payload: pageData}));
  }
}
