import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

import { RoutingService } from './routing.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from '../core/state/app.state';

describe('RoutingService', () => {
  let service: RoutingService;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule ],
      providers: [provideMockStore({})]
    });
    store = TestBed.inject(MockStore);
    service = TestBed.inject(RoutingService);

    store.setState({
      base: {
        data:[],
        currentPageData: {
          title: 'Setting Page Title Tested',
          description: 'Description Tested'
        }
      }
    });
    store.refreshState();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
