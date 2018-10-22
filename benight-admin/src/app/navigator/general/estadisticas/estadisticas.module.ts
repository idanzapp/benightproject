import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { EstadisticasPage } from './estadisticas.page'
import { EstadisticasRoutingModule } from './estadisticas-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    EstadisticasRoutingModule
  ],
  declarations: [EstadisticasPage]
})
export class GeneralEstadisticasPageModule {}