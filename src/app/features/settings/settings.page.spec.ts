import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { SettingsPage } from './settings.page';
import { AppState } from './../../core/state/app.state';

describe('SettingsPage', () => {
  let component: SettingsPage;
  let fixture: ComponentFixture<SettingsPage>;
  let store: MockStore;

  const initialState: AppState = {
    base: {
      data:[],
      currentPageData: {
        title: 'Setting Page',
        description: 'old'
      }
    }
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsPage ],
      imports: [IonicModule.forRoot()],
      providers: [provideMockStore( {initialState} ),
        // other providers
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(SettingsPage);

    component = fixture.componentInstance;
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

