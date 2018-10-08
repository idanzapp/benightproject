import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { ListTraduccionesPage } from './list-traducciones.page'
import { ListTraduccionesRoutingModule } from './list-traducciones-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    ListTraduccionesRoutingModule
  ],
  declarations: [ListTraduccionesPage]
})
export class ListTraduccionesPageModule {}
