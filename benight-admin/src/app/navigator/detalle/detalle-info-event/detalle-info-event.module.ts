import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { DetalleInfoEventPage } from './detalle-info-event.page'
import { DetalleInfoEventRoutingModule } from './detalle-info-event-routing.module'

import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    DetalleInfoEventRoutingModule
  ],
  declarations: [DetalleInfoEventPage]
})
export class DetalleInfoEventPageModule {}
