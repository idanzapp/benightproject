import { NgModule } from '@angular/core'
import { myBaseModules } from '@bn8-core/imports'
import { AdsPage } from './ads.page'
import { AdsRoutingModule } from './ads-routing.module'
import { DetalleHandlerPageModule } from '@bn8-detalle/detalle-handler.module'

@NgModule({
  imports: [
    ...myBaseModules,
    AdsRoutingModule,
    DetalleHandlerPageModule
  ],
  declarations: [AdsPage]
})
export class AdsPageModule {}
