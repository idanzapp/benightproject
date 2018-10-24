import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { ListEmpleadosPage } from '@bn8-imports/imports.views'
import { ListEmpleadosRoutingModule } from '@bn8-imports/imports.routing'

@NgModule({
  imports: [
    ...myBaseModules,
    ListEmpleadosRoutingModule
  ],
  declarations: [ListEmpleadosPage]
})
export class ListEmpleadosPageModule {}
