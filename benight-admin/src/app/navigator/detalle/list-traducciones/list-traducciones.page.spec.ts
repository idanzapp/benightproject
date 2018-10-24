import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ListTraduccionesPage } from '@bn8-imports/imports.views'

describe('ListTraduccionesPage', () => {
  let component: ListTraduccionesPage
  let fixture: ComponentFixture<ListTraduccionesPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTraduccionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTraduccionesPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
