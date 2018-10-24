import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { ListListasPage } from '@bn8-imports/imports.views'
import { ListListasRoutingModule } from '@bn8-imports/imports.routing'

@NgModule({
  imports: [
    ...myBaseModules,
    ListListasRoutingModule
  ],
  declarations: [ListListasPage]
})
export class ListListasPageModule {}