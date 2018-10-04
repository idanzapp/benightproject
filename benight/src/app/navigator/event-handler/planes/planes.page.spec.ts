import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PlanesPage } from './planes.page'

describe('PlanesPage', () => {
  let component: PlanesPage
  let fixture: ComponentFixture<PlanesPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanesPage);
    component = fixture.componentInstance;
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
