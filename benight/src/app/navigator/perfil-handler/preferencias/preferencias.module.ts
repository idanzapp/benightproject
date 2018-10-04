import { NgModule } from '@angular/core'
import { myBaseModules } from '@bn8-core/imports'
import { PreferenciasPage } from './preferencias.page'
import { PreferenciasRoutingModule } from './preferencias-routing.module'
import { DetalleHandlerPageModule } from '@bn8-detalle/detalle-handler.module'

@NgModule({
  imports: [
    ...myBaseModules,
    PreferenciasRoutingModule,
    DetalleHandlerPageModule
  ],
  declarations: [PreferenciasPage]
})
export class PreferenciasPageModule {}
