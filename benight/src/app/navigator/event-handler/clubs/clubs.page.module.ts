import { NgModule } from '@angular/core'
import { myBaseModules } from '@bn8-core/imports'
import { ClubsPage } from './clubs.page'
import { ClubsRoutingModule } from './clubs-routing.module'
import { DetalleHandlerPageModule } from '@bn8-detalle/detalle-handler.module'

@NgModule({
  imports: [
    ...myBaseModules,
    ClubsRoutingModule,
    DetalleHandlerPageModule
  ],
  declarations: [ClubsPage]
})
export class ClubsPageModule {}
