import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FilePickerPage } from './file-picker.page'

describe('FilePickerPage', () => {
  let component: FilePickerPage
  let fixture: ComponentFixture<FilePickerPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilePickerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(FilePickerPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
