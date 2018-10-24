import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { ListRequisitosPage } from '@bn8-imports/imports.views'
import { ListRequisitosRoutingModule } from '@bn8-imports/imports.routing'

@NgModule({
  imports: [
    ...myBaseModules,
    ListRequisitosRoutingModule
  ],
  declarations: [ListRequisitosPage]
})
export class ListRequisitosPageModule {}