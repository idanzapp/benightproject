import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { BansPage } from '@bn8-imports/imports.views'

describe('BansPage', () => {
  let component: BansPage
  let fixture: ComponentFixture<BansPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BansPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BansPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
