import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { ListEstadisticasPage } from './list-estadisticas.page'
import { ListEstadisticasRoutingModule } from './list-estadisticas-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    ListEstadisticasRoutingModule
  ],
  declarations: [ListEstadisticasPage]
})
export class ListEstadisticasPageModule {}
