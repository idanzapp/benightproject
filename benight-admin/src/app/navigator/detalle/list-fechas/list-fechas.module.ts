import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { ListFechasPage } from './list-fechas.page'
import { ListFechasRoutingModule } from './list-fechas-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    ListFechasRoutingModule
  ],
  declarations: [ListFechasPage]
})
export class ListFechasPageModule {}
