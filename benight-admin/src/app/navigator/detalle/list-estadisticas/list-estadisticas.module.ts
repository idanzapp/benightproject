import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { ListEstadisticasPage } from '@bn8-imports/imports.views'
import { ListEstadisticasRoutingModule } from '@bn8-imports/imports.routing'

@NgModule({
  imports: [
    ...myBaseModules,
    ListEstadisticasRoutingModule
  ],
  declarations: [ListEstadisticasPage]
})
export class ListEstadisticasPageModule {}
