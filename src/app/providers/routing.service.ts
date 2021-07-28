import { Injectable } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { PageData } from '../shared/models/base-page.model';
import { getBasePageByNameAction, loadBasePagesAction } from '../shared/store/actions/base-page.action';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  currentPagename = 'Home';

  constructor(private router: Router, private store: Store) { }

  /**
   * Detecte router change and do what we need
   */
  onRouteChange() {
    this.router.events.pipe(
      filter((e: Event): e is NavigationEnd => e instanceof NavigationEnd)
    ).subscribe((e: NavigationEnd) => {
        const currentPagename = e.urlAfterRedirects.split('/').pop();
        this.setCurrentPageState(currentPagename);
    });
  }

  /**
   * Initiate Base State of pages
   */
  setPageDataState(data: PageData[]) {
    this.store.dispatch(loadBasePagesAction({payload: data, pageName: this.currentPagename}));
  }

  private setCurrentPageState(currentPagename: string) {
    this.store.dispatch(getBasePageByNameAction({pageName: currentPagename}));
  }
}
