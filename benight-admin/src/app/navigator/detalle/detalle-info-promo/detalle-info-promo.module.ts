import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { DetalleInfoPromoPage, } from '@bn8-imports/imports.views'
import { DetalleInfoPromoRoutingModule } from '@bn8-imports/imports.routing'

import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    DetalleInfoPromoRoutingModule
  ],
  declarations: [DetalleInfoPromoPage]
})
export class DetalleInfoPromoPageModule {}
