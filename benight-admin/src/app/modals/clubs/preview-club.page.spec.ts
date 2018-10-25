import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PreviewClubPage } from '@bn8-imports/imports.views'

describe('PreviewClubPage', () => {
  let component: PreviewClubPage
  let fixture: ComponentFixture<PreviewClubPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewClubPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewClubPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
