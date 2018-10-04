import { NgModule } from '@angular/core'
import { myBaseModules } from '@bn8-core/imports'
import { MapaPage } from './mapa.page'
import { MapaRoutingModule } from './mapa-routing.module'
import { DetalleHandlerPageModule } from '@bn8-detalle/detalle-handler.module'

@NgModule({
  imports: [
    ...myBaseModules,
    MapaRoutingModule,
    DetalleHandlerPageModule
  ],
  declarations: [MapaPage]
})
export class MapaPageModule {}
