import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { EventosPage } from './eventos.page'
import { DetalleInfoEventPage  } from '@bn8-detalle/detalle-info-event/detalle-info-event.page'
import { EventosRoutingModule } from './eventos-routing.module'


import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    EventosRoutingModule
  ],
  declarations: [EventosPage,DetalleInfoEventPage]
})
export class EventosPageModule {}