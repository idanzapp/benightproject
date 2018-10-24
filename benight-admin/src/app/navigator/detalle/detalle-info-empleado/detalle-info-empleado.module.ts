import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { DetalleInfoEmpleadoPage } from '@bn8-imports/imports.views'
import { DetalleInfoEmpleadoRoutingModule } from '@bn8-imports/imports.routing'

import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    DetalleInfoEmpleadoRoutingModule
  ],
  declarations: [DetalleInfoEmpleadoPage]
})
export class DetalleInfoEmpleadoPageModule {}
