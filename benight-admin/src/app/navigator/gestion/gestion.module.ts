import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { GestionPage } from '@bn8-imports/imports.views'
import { GestionRoutingModule } from '@bn8-imports/imports.routing'

@NgModule({
  imports: [
    ...myBaseModules,
    GestionRoutingModule
  ],
  declarations: [GestionPage]
})
export class GestionPageModule {}