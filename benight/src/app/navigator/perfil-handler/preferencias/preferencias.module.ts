import { NgModule } from '@angular/core'
import { myBaseModules } from '@bn8-core/imports'
import { PreferenciasPage } from './preferencias.page'
import { PreferenciasRoutingModule } from './preferencias-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    PreferenciasRoutingModule
  ],
  declarations: [PreferenciasPage]
})
export class PreferenciasPageModule {}
