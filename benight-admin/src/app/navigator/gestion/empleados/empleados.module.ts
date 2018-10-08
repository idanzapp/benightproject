import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { EmpleadosPage } from './empleados.page'
import { EmpleadosRoutingModule } from './empleados-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    EmpleadosRoutingModule
  ],
  declarations: [EmpleadosPage]
})
export class EmpleadosPageModule {}