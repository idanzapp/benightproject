import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DefaultEventPage } from '@bn8-imports/imports.views'

describe('DefaultEventPage', () => {
  let component: DefaultEventPage
  let fixture: ComponentFixture<DefaultEventPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultEventPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultEventPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
