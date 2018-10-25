import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PreviewPlanesPage } from '@bn8-imports/imports.views'

describe('PreviewPlanesPage', () => {
  let component: PreviewPlanesPage
  let fixture: ComponentFixture<PreviewPlanesPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewPlanesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewPlanesPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
