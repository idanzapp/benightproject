import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { FilePickerPage } from './file-picker.page'
import { FilePickerRoutingModule } from './file-picker-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    FilePickerRoutingModule
  ],
  declarations: [FilePickerPage]
})
export class FilePickerPageModule {}
