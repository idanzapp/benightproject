import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { ListPublicoPage } from './list-publico.page'
import { ListPublicoRoutingModule } from './list-publico-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    ListPublicoRoutingModule
  ],
  declarations: [ListPublicoPage]
})
export class ListPublicoPageModule {}
