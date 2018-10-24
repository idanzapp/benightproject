import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { DetalleInfoEventPage } from '@bn8-imports/imports.views'
import { DetalleInfoEventRoutingModule } from '@bn8-imports/imports.routing'

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
