import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DefaultPromoPage } from '@bn8-imports/imports.views'

describe('DefaultPromoPage', () => {
  let component: DefaultPromoPage
  let fixture: ComponentFixture<DefaultPromoPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultPromoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultPromoPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
