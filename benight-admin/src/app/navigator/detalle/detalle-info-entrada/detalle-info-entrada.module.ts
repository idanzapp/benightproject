import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { DetalleInfoEntradaPage } from '@bn8-imports/imports.views'
import { DetalleInfoEntradaRoutingModule } from '@bn8-imports/imports.routing'

import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    DetalleInfoEntradaRoutingModule
  ],
  declarations: [DetalleInfoEntradaPage]
})
export class DetalleInfoEntradaPageModule {}
