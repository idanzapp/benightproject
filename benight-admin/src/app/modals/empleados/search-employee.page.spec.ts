import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { SearchEmployeesPage } from '@bn8-imports/imports.previews'

describe('SearchEmployeesPage', () => {
  let component: SearchEmployeesPage
  let fixture: ComponentFixture<SearchEmployeesPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEmployeesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEmployeesPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
