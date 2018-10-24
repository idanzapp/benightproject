import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { PromosPage, DetalleInfoPromoPage } from '@bn8-imports/imports.views'
import { PromosRoutingModule } from '@bn8-imports/imports.routing'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    PromosRoutingModule
  ],
  declarations: [PromosPage, DetalleInfoPromoPage]
})
export class PromosPageModule {}