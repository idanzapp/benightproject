import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ListPropietariosPage } from '@bn8-imports/imports.views'

describe('ListPropietariosPage', () => {
  let component: ListPropietariosPage
  let fixture: ComponentFixture<ListPropietariosPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPropietariosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPropietariosPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
