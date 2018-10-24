import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { NotificacionesPage } from '@bn8-imports/imports.views'
import { NotificacionesRoutingModule } from '@bn8-imports/imports.routing'

@NgModule({
  imports: [
    ...myBaseModules,
    NotificacionesRoutingModule
  ],
  declarations: [NotificacionesPage]
})
export class NotificacionesPageModule {}
