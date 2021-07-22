import { TestBed } from '@angular/core/testing';

import { StartupService } from './startup.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SettingState } from '../shared/models/setting.state';
import { ProfileState } from '../shared/models/profile.state';
import { AppState } from '../core/state/app.state';

describe('StartupService', () => {
  let service: StartupService;
  let store: MockStore;
  const initialState: AppState = {
    base: {
      data:[],
      currentPageData: {
        title: 'Setting Page',
        description: 'old'
    }
    },
    settings: {} as SettingState,
    profile: {} as ProfileState
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [provideMockStore( {initialState})]
    });
    store = TestBed.inject(MockStore);
    service = TestBed.inject(StartupService);
    store.setState({
      base: {
        data:[],
        currentPageData: {
          title: 'Setting Page Title Tested',
          description: 'Description Tested'
      }
      },
      settings: {} as SettingState,
      profile: {} as ProfileState
    });
    store.refreshState();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
