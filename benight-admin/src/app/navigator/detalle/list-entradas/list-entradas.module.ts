import { NgModule } from '@angular/core'
import { myBaseModules } from '@bn8-imports/imports.main'
import { ListEntradasPage } from './list-entradas.page'
import { ListEntradasRoutingModule } from './list-entradas-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    ListEntradasRoutingModule
  ],
  declarations: [ListEntradasPage]
})
export class ListEntradasPageModule {}
