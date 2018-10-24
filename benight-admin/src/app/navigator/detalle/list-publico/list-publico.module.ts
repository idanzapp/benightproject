import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { ListPublicoPage } from '@bn8-imports/imports.views'
import { ListPublicoRoutingModule } from '@bn8-imports/imports.routing'

@NgModule({
  imports: [
    ...myBaseModules,
    ListPublicoRoutingModule
  ],
  declarations: [ListPublicoPage]
})
export class ListPublicoPageModule {}