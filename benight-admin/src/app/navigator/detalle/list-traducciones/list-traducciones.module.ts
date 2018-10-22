import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { ListTraduccionesPage } from './list-traducciones.page'
import { ListTraduccionesRoutingModule } from './list-traducciones-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    ListTraduccionesRoutingModule
  ],
  declarations: [ListTraduccionesPage]
})
export class ListTraduccionesPageModule {}