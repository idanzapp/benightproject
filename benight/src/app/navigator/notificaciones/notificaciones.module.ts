import { NgModule } from '@angular/core'
import { myBaseModules } from  '@bn8-core/imports'
import { CoreModule } from  '@bn8-core/core.module'

import { RouterModule } from '@angular/router'
import { NotificacionesRoutingModule } from './notificaciones-routing.module'
import { NotificacionesPage } from './notificaciones.page'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    NotificacionesRoutingModule,
  ],
  declarations: [NotificacionesPage]
})
export class NotificacionesPageModule {}
