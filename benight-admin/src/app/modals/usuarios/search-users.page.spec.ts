import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { SearchUsersPage } from '@bn8-imports/imports.previews'

describe('SearchUsersPage', () => {
  let component: SearchUsersPage
  let fixture: ComponentFixture<SearchUsersPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUsersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUsersPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
