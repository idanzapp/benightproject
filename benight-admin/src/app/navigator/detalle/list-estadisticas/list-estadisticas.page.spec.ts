import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ListEstadisticasPage } from '@bn8-imports/imports.views'

describe('ListEstadisticasPage', () => {
  let component: ListEstadisticasPage
  let fixture: ComponentFixture<ListEstadisticasPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEstadisticasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEstadisticasPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
