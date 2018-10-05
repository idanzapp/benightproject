import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { NotificacionesPage } from './notificaciones.page'
import { NotificacionesRoutingModule } from './notificaciones-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    NotificacionesRoutingModule
  ],
  declarations: [NotificacionesPage]
})
export class NotificacionesPageModule {}
