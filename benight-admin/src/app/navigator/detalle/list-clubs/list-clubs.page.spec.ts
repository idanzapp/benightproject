import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ListClubsPage } from '@bn8-imports/imports.views'

describe('ListClubsPage', () => {
  let component: ListClubsPage
  let fixture: ComponentFixture<ListClubsPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListClubsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClubsPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
