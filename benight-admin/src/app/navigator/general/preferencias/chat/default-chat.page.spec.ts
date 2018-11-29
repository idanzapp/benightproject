import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DefaultChatPage } from '@bn8-imports/imports.views'

describe('DefaultChatPage', () => {
  let component: DefaultChatPage
  let fixture: ComponentFixture<DefaultChatPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultChatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultChatPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
