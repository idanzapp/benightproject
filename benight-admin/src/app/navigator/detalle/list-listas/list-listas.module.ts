import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { ListListasPage } from './list-listas.page'
import { ListListasRoutingModule } from './list-listas-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    ListListasRoutingModule
  ],
  declarations: [ListListasPage]
})
export class ListListasPageModule {}