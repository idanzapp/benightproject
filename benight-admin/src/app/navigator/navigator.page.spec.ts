import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { NavigatorPage } from '@bn8-imports/imports.views'

describe('NavigatorPage', () => {
  let component: NavigatorPage
  let fixture: ComponentFixture<NavigatorPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigatorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatorPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
