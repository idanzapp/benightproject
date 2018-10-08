import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ListListasPage } from './list-listas.page'

describe('ListListasPage', () => {
  let component: ListListasPage
  let fixture: ComponentFixture<ListListasPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListListasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ListListasPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
