import { NgModule } from '@angular/core'
import { myBaseModules } from '@bn8-core/imports'
import { PerfilPage } from './perfil.page'
import { PerfilRoutingModule } from './perfil-routing.module'
import { DetalleHandlerPageModule } from '@bn8-detalle/detalle-handler.module'

@NgModule({
  imports: [
    ...myBaseModules,
    PerfilRoutingModule,
    DetalleHandlerPageModule
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
