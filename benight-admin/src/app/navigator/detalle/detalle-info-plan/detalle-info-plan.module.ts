import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { DetalleInfoPlanPage } from '@bn8-imports/imports.views'
import { PreviewPlanesPage } from '@bn8-imports/imports.previews'
import { DetalleInfoPlanRoutingModule } from '@bn8-imports/imports.routing'

import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    DetalleInfoPlanRoutingModule
  ],
  entryComponents:[PreviewPlanesPage],
  declarations: [DetalleInfoPlanPage,PreviewPlanesPage]
})
export class DetalleInfoPlanPageModule {}
