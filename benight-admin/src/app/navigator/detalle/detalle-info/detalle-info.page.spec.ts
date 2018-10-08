import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DetalleInfoPage } from './detalle-info.page'

describe('DetalleInfoPage', () => {
  let component: DetalleInfoPage
  let fixture: ComponentFixture<DetalleInfoPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleInfoPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
