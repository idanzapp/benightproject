import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { EventHandlerPage } from './event-handler.page'

describe('EventHandlerPage', () => {
  let component: EventHandlerPage
  let fixture: ComponentFixture<EventHandlerPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventHandlerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(EventHandlerPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
