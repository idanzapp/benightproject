import { NgModule } from '@angular/core'
import { myBaseModules } from '@bn8-core/imports'
import { EventosPage } from './eventos.page'
import { EventosRoutingModule } from './eventos-routing.module'
import { DetalleHandlerPageModule } from '@bn8-detalle/detalle-handler.module'

@NgModule({
  imports: [
    ...myBaseModules,
    EventosRoutingModule,
    DetalleHandlerPageModule
  ],
  declarations: [EventosPage]
})
export class EventosPageModule {}
