import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DefaultPlanPage } from '@bn8-imports/imports.views'

describe('DefaultPlanPage', () => {
  let component: DefaultPlanPage
  let fixture: ComponentFixture<DefaultPlanPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultPlanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultPlanPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
