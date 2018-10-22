import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { ListFechasPage } from './list-fechas.page'
import { ListFechasRoutingModule } from './list-fechas-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    ListFechasRoutingModule
  ],
  declarations: [ListFechasPage]
})
export class ListFechasPageModule {}
