import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DetalleHandlerPage } from './detalle-handler.page'

describe('DetalleHandlerPage', () => {
  let component: DetalleHandlerPage
  let fixture: ComponentFixture<DetalleHandlerPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleHandlerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleHandlerPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
