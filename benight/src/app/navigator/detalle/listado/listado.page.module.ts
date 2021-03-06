import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { ListadoPage } from './listado.page'
import { ListadoRoutingModule } from './listado-routing.page.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    ListadoRoutingModule
  ],
  declarations: [ListadoPage]
})
export class ListadoPageModule {}
