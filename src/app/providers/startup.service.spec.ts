import { RouterTestingModule } from '@angular/router/testing';
import { RoutingService } from './routing.service';
import { TestBed } from '@angular/core/testing';
import { StartupService } from './startup.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';


describe('StartupService', () => {
  let service: StartupService;
  let store: MockStore;
  let mockRouter: any;
  class MockRouter {
      //noinspection TypeScriptUnresolvedFunction
      navigate = jasmine.createSpy('navigate');
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RoutingService,
        {provide: Router, useValue: mockRouter},
        {provide: Store, useValue: store}
      ]
    });
    service = TestBed.inject(StartupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
