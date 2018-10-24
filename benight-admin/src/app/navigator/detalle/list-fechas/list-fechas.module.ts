import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { ListFechasPage } from '@bn8-imports/imports.views'
import { ListFechasRoutingModule } from '@bn8-imports/imports.routing'

@NgModule({
  imports: [
    ...myBaseModules,
    ListFechasRoutingModule
  ],
  declarations: [ListFechasPage]
})
export class ListFechasPageModule {}
