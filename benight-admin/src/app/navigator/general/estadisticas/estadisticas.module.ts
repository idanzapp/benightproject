import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { EstadisticasPage } from './estadisticas.page'
import { EstadisticasRoutingModule } from './estadisticas-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    EstadisticasRoutingModule
  ],
  declarations: [EstadisticasPage]
})
export class GeneralEstadisticasPageModule {}