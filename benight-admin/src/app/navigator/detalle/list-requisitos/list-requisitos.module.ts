import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { ListRequisitosPage } from './list-requisitos.page'
import { ListRequisitosRoutingModule } from './list-requisitos-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    ListRequisitosRoutingModule
  ],
  declarations: [ListRequisitosPage]
})
export class ListRequisitosPageModule {}