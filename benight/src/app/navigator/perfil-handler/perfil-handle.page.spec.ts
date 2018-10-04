import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PerfilHandlerPage } from './perfil-handler.page'

describe('PerfilPage', () => {
  let component: PerfilHandlerPage
  let fixture: ComponentFixture<PerfilHandlerPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilHandlerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilHandlerPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
