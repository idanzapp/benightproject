import { TestBed } from '@angular/core/testing'

import { 
  FirestoreEventService,
  FirestoreTicketService,
  FunctionsEventService,
  FunctionsTicketService,
  MessagingEventService,
  MessagingTicketService
} from './db-extension.service'

describe('FirestoreEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: FirestoreEventService = TestBed.get(FirestoreEventService)
    expect(service).toBeTruthy()
  })
})

describe('FirestoreTicketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: FirestoreTicketService = TestBed.get(FirestoreTicketService)
    expect(service).toBeTruthy()
  })
})

describe('FunctionsEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: FunctionsEventService = TestBed.get(FunctionsEventService)
    expect(service).toBeTruthy()
  })
})

describe('MessagingEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: MessagingEventService = TestBed.get(MessagingEventService)
    expect(service).toBeTruthy()
  })
})

describe('FunctionsTicketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: FunctionsTicketService = TestBed.get(FunctionsTicketService)
    expect(service).toBeTruthy()
  })
})

describe('MessagingTicketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: MessagingTicketService = TestBed.get(MessagingTicketService)
    expect(service).toBeTruthy()
  })
})
