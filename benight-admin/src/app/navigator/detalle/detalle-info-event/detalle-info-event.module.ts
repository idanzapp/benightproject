import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { DetalleInfoEventPage } from './detalle-info-event.page'
import { DetalleInfoEventRoutingModule } from './detalle-info-event-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    ReactiveFormsModule,
    RouterModule,
    DetalleInfoEventRoutingModule
  ],
  declarations: [DetalleInfoEventPage]
})
export class DetalleInfoEventPageModule {}
