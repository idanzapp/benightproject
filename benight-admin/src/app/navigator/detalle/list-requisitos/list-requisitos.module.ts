import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { ListRequisitosPage } from './list-requisitos.page'
import { ListRequisitosRoutingModule } from './list-requisitos-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    ListRequisitosRoutingModule
  ],
  declarations: [ListRequisitosPage]
})
export class ListRequisitosPageModule {}
