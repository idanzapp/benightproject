import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DetalleInfoPromoPage } from '@bn8-imports/imports.views'

describe('DetalleInfoPromoPage', () => {
  let component: DetalleInfoPromoPage
  let fixture: ComponentFixture<DetalleInfoPromoPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleInfoPromoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleInfoPromoPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
