import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DetalleInfoPlanPage } from '@bn8-imports/imports.views'

describe('DetalleInfoPlanPage', () => {
  let component: DetalleInfoPlanPage
  let fixture: ComponentFixture<DetalleInfoPlanPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleInfoPlanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleInfoPlanPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
