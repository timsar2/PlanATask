import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { ProfilePage } from './profile.page';
import { AppState } from './../../core/state/app.state';
import { SettingState } from 'src/app/shared/models/setting.state';
import { ProfileState } from 'src/app/shared/models/profile.state';

describe('ProfilePage', () => {
  let component: ProfilePage;
  let fixture: ComponentFixture<ProfilePage>;
  let store: MockStore;

  const initialState: AppState = {
    base: {
      data:[],
      currentPageData: {
        title: 'Profile Page',
        description: 'old'
    }
    },
    settings: {} as SettingState,
    profile: {} as ProfileState
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePage ],
      imports: [IonicModule.forRoot()],
      providers: [provideMockStore( {initialState} ),
        // other providers
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ProfilePage);

    component = fixture.componentInstance;
    fixture.detectChanges();
    store.setState({
      base: {
        data:[],
        currentPageData: {
          title: 'Profile Page Title Tested',
          description: 'Description Tested'
      }
      },
      settings: {} as SettingState,
      profile: {} as ProfileState
    });
    store.refreshState();
  }));

  it('should display title from BaseState', () => {
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('ion-title');
    component.title.subscribe((data) => {
      expect(title.textContent).toContain(data);
    });
  });

  it('should display description from BaseState', () => {
    fixture.detectChanges();
    const value = fixture.nativeElement.querySelector('h1');
    component.description.subscribe((data) => {
      expect(value.textContent).toContain(data);
    });
  });
});

