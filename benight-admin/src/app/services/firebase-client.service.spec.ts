import { TestBed } from '@angular/core/testing'

import { FirebaseClient } from './firebase-client.service'

describe('FirebaseClient', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: FirebaseClient = TestBed.get(FirebaseClient)
    expect(service).toBeTruthy()
  })
})