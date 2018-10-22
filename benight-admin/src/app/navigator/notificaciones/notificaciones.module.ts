import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { NotificacionesPage } from './notificaciones.page'
import { NotificacionesRoutingModule } from './notificaciones-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    NotificacionesRoutingModule
  ],
  declarations: [NotificacionesPage]
})
export class NotificacionesPageModule {}
