import { TestBed, async, inject } from '@angular/core/testing';

import { UserLevelGuard } from './user-level.guard';

describe('UserLevelGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserLevelGuard]
    });
  });

  it('should ...', inject([UserLevelGuard], (guard: UserLevelGuard) => {
    expect(guard).toBeTruthy();
  }));
});
