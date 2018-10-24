import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { PlanesPage, DetalleInfoPlanPage } from '@bn8-imports/imports.views'
import {  PlanesRoutingModule } from '@bn8-imports/imports.routing'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    PlanesRoutingModule
  ],
  declarations: [PlanesPage, DetalleInfoPlanPage]
})
export class PlanesPageModule {}