import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { EstadisticasPage } from '@bn8-imports/imports.views'
import { EstadisticasRoutingModule } from '@bn8-imports/imports.routing'

@NgModule({
  imports: [
    ...myBaseModules,
    EstadisticasRoutingModule
  ],
  declarations: [EstadisticasPage]
})
export class GeneralEstadisticasPageModule {}