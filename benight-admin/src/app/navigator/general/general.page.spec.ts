import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { GeneralPage } from '@bn8-imports/imports.views'

describe('GeneralPage', () => {
  let component: GeneralPage
  let fixture: ComponentFixture<GeneralPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
