import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ListEmpleadosPage } from './list-empleados.page'

describe('ListEmpleadosPage', () => {
  let component: ListEmpleadosPage
  let fixture: ComponentFixture<ListEmpleadosPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEmpleadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmpleadosPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
