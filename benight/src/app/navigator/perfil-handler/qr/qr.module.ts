import { NgModule } from '@angular/core'
import { myBaseModules } from '@bn8-core/imports'
import { QrPage } from './qr.page'
import { QrRoutingModule } from './qr-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    QrRoutingModule
  ],
  declarations: [QrPage]
})
export class PerfilQrPageModule {}
