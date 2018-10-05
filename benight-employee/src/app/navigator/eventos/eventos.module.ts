import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { EventosPage } from './eventos.page'
import { EventosRoutingModule } from './eventos-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    EventosRoutingModule
  ],
  declarations: [EventosPage]
})
export class EventosPageModule {}
