import { TestBed } from '@angular/core/testing';

import { DbExtensionService } from './db-extension.service';

describe('DbExtensionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbExtensionService = TestBed.get(DbExtensionService);
    expect(service).toBeTruthy();
  });
});
