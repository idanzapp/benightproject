import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { ListListasPage } from './list-listas.page'
import { ListListasRoutingModule } from './list-listas-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    ListListasRoutingModule
  ],
  declarations: [ListListasPage]
})
export class ListListasPageModule {}
