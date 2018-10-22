import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { ListEmpleadosPage } from './list-empleados.page'
import { ListEmpleadosRoutingModule } from './list-empleados-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    ListEmpleadosRoutingModule
  ],
  declarations: [ListEmpleadosPage]
})
export class ListEmpleadosPageModule {}
