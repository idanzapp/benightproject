import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DefaultNotificationPage } from '@bn8-imports/imports.views'

describe('DefaultNotificationPage', () => {
  let component: DefaultNotificationPage
  let fixture: ComponentFixture<DefaultNotificationPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultNotificationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultNotificationPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
