import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DetalleInfoEmpleadoPage } from '@bn8-imports/imports.views'

describe('DetalleInfoEmpleadoPage', () => {
  let component: DetalleInfoEmpleadoPage
  let fixture: ComponentFixture<DetalleInfoEmpleadoPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleInfoEmpleadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleInfoEmpleadoPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
