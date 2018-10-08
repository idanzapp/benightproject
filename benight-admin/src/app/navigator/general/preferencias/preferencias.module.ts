import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { PreferenciasPage } from './preferencias.page'
import { PreferenciasRoutingModule } from './preferencias-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    PreferenciasRoutingModule
  ],
  declarations: [PreferenciasPage]
})
export class PreferenciasPageModule {}