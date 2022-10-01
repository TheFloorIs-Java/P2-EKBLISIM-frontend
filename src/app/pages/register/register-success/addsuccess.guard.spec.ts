import { TestBed } from '@angular/core/testing';

import { AddsuccessGuard } from './addsuccess.guard';

describe('AddsuccessGuard', () => {
  let guard: AddsuccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AddsuccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
