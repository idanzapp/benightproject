
import { NgModule } from '@angular/core'
import { myBaseModules } from  '@bn8-core/imports'
import { CoreModule } from  '@bn8-core/core.module'

import { RouterModule } from '@angular/router'
import { EventHandlerRoutingModule } from './event-handler-routing.module'
import { EventHandlerPage } from './event-handler.page'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    EventHandlerRoutingModule,
  ],
  declarations: [EventHandlerPage]
})
export class EventHandlerPageModule {}
