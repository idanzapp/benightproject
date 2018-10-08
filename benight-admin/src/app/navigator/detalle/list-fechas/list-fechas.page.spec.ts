import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ListFechasPage } from './list-fechas.page'

describe('ListFechasPage', () => {
  let component: ListFechasPage
  let fixture: ComponentFixture<ListFechasPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFechasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFechasPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
