import { NgModule } from '@angular/core'
import { myBaseModules } from '@bn8-core/imports'
import { PlanesPage } from './planes.page'
import { PlanesRoutingModule } from './planes-routing.module'
import { DetalleHandlerPageModule } from '@bn8-detalle/detalle-handler.module'

@NgModule({
  imports: [
    ...myBaseModules,
    PlanesRoutingModule,
    DetalleHandlerPageModule
  ],
  declarations: [PlanesPage]
})
export class PlanesPageModule {}
