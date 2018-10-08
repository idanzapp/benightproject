import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ListTagsPage } from './list-tags.page'

describe('ListTagsPage', () => {
  let component: ListTagsPage
  let fixture: ComponentFixture<ListTagsPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTagsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTagsPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
