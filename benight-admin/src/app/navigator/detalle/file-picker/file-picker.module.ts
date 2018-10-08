import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { FilePickerPage } from './file-picker.page'
import { FilePickerRoutingModule } from './file-picker-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    FilePickerRoutingModule
  ],
  declarations: [FilePickerPage]
})
export class FilePickerPageModule {}
