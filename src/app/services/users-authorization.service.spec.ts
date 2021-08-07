import { TestBed } from '@angular/core/testing';

import { UsersAuthorizationService } from './users-authorization.service';

describe('UsersAuthorizationService', () => {
  let service: UsersAuthorizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersAuthorizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
