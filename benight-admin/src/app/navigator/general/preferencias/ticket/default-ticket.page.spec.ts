import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DefaultTicketPage } from '@bn8-imports/imports.views'

describe('DefaultTicketPage', () => {
  let component: DefaultTicketPage
  let fixture: ComponentFixture<DefaultTicketPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultTicketPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultTicketPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
