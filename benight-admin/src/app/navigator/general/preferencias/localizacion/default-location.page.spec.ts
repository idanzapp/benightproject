import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DefaultLocationPage } from '@bn8-imports/imports.views'

describe('DefaultLocationPage', () => {
  let component: DefaultLocationPage
  let fixture: ComponentFixture<DefaultLocationPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultLocationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultLocationPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
