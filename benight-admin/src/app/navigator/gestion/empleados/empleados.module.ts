import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { EmpleadosPage } from './empleados.page'
import { EmpleadosRoutingModule } from './empleados-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    EmpleadosRoutingModule
  ],
  declarations: [EmpleadosPage]
})
export class EmpleadosPageModule {}