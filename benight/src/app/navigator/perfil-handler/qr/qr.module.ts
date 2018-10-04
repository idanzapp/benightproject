import { NgModule } from '@angular/core'
import { myBaseModules } from '@bn8-core/imports'
import { QrPage } from './qr.page'
import { QrRoutingModule } from './qr-routing.module'
import { DetalleHandlerPageModule } from '@bn8-detalle/detalle-handler.module'

@NgModule({
  imports: [
    ...myBaseModules,
    QrRoutingModule,
    DetalleHandlerPageModule
  ],
  declarations: [QrPage]
})
export class PerfilQrPageModule {}
