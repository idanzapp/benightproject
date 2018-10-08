import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { ListEntradasPage } from './list-entradas.page'
import { ListEntradasRoutingModule } from './list-entradas-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    ListEntradasRoutingModule
  ],
  declarations: [ListEntradasPage]
})
export class ListEntradasPageModule {}
