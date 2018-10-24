import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DetalleInfoEntradaPage } from '@bn8-imports/imports.views'

describe('DetalleInfoEntradaPage', () => {
  let component: DetalleInfoEntradaPage
  let fixture: ComponentFixture<DetalleInfoEntradaPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleInfoEntradaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleInfoEntradaPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
