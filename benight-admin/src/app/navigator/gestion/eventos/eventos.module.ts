import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { EventosPage } from './eventos.page'
import { DetalleInfoEventPage  } from '@bn8-detalle/detalle-info-event/detalle-info-event.page'
import { EventosRoutingModule } from './eventos-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'


import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    ReactiveFormsModule,
    RouterModule,
    EventosRoutingModule
  ],
  declarations: [EventosPage,DetalleInfoEventPage]
})
export class EventosPageModule {}