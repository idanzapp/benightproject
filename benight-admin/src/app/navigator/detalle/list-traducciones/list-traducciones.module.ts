import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { ListTraduccionesPage } from '@bn8-imports/imports.views'
import { ListTraduccionesRoutingModule } from '@bn8-imports/imports.routing'

@NgModule({
  imports: [
    ...myBaseModules,
    ListTraduccionesRoutingModule
  ],
  declarations: [ListTraduccionesPage]
})
export class ListTraduccionesPageModule {}