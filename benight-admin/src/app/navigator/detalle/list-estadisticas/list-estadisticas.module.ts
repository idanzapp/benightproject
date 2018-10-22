import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { ListEstadisticasPage } from './list-estadisticas.page'
import { ListEstadisticasRoutingModule } from './list-estadisticas-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    ListEstadisticasRoutingModule
  ],
  declarations: [ListEstadisticasPage]
})
export class ListEstadisticasPageModule {}
