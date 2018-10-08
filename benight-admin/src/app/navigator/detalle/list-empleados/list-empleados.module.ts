import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { ListEmpleadosPage } from './list-empleados.page'
import { ListEmpleadosRoutingModule } from './list-empleados-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    ListEmpleadosRoutingModule
  ],
  declarations: [ListEmpleadosPage]
})
export class ListEmpleadosPageModule {}
