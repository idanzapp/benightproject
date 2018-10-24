import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { PreferenciasPage } from '@bn8-imports/imports.views'
import { PreferenciasRoutingModule } from '@bn8-imports/imports.routing'

@NgModule({
  imports: [
    ...myBaseModules,
    PreferenciasRoutingModule
  ],
  declarations: [PreferenciasPage]
})
export class PreferenciasPageModule {}