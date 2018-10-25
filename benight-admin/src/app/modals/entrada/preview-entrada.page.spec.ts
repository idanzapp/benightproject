import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PreviewEntradaPage } from '@bn8-imports/imports.views'

describe('PreviewEntradaPage', () => {
  let component: PreviewEntradaPage
  let fixture: ComponentFixture<PreviewEntradaPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewEntradaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewEntradaPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
