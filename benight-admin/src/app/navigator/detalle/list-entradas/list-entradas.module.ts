import { NgModule } from '@angular/core'
import { myBaseModules } from '@bn8-imports/imports.main'
import { ListEntradasPage } from '@bn8-imports/imports.views'
import { ListEntradasRoutingModule } from '@bn8-imports/imports.routing'

@NgModule({
  imports: [
    ...myBaseModules,
    ListEntradasRoutingModule
  ],
  declarations: [ListEntradasPage]
})
export class ListEntradasPageModule {}
