import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { ListPublicoPage } from './list-publico.page'
import { ListPublicoRoutingModule } from './list-publico-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    ListPublicoRoutingModule
  ],
  declarations: [ListPublicoPage]
})
export class ListPublicoPageModule {}