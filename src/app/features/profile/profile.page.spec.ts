import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { ProfilePage } from './profile.page';
import { AppState } from './../../core/state/app.state';

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
    }
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
    store.setState({
      base: {
        data:[],
        currentPageData: {
          title: 'Profile Page Title Tested',
          description: 'Description Tested'
        }
      }
    });
    store.refreshState();
  }));

  afterEach(() => {
    fixture.destroy();
  });

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

