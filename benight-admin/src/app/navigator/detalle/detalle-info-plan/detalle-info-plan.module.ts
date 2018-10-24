import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { DetalleInfoPlanPage } from '@bn8-imports/imports.views'
import { DetalleInfoPlanRoutingModule } from '@bn8-imports/imports.routing'

import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    DetalleInfoPlanRoutingModule
  ],
  declarations: [DetalleInfoPlanPage]
})
export class DetalleInfoPlanPageModule {}
