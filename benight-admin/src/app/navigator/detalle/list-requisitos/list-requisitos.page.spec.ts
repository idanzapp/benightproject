import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ListRequisitosPage } from '@bn8-imports/imports.views'

describe('ListRequisitosPage', () => {
  let component: ListRequisitosPage
  let fixture: ComponentFixture<ListRequisitosPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRequisitosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRequisitosPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
