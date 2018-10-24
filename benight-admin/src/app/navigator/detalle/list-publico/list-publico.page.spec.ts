import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ListPublicoPage } from '@bn8-imports/imports.views'

describe('ListPublicoPage', () => {
  let component: ListPublicoPage
  let fixture: ComponentFixture<ListPublicoPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPublicoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPublicoPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
