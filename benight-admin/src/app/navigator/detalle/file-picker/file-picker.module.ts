import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { FilePickerPage } from '@bn8-imports/imports.views'
import { FilePickerRoutingModule } from '@bn8-imports/imports.routing'

@NgModule({
  imports: [
    ...myBaseModules,
    FilePickerRoutingModule
  ],
  declarations: [FilePickerPage]
})
export class FilePickerPageModule {}
