import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { PlanesPage } from '@bn8-imports/imports.views'
import { PlanesRoutingModule } from '@bn8-imports/imports.routing'
import { ReactiveFormsModule } from '@angular/forms'
import { CountdownComponentModule } from '@bn8-core/countdown/countdown.component.module'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    PlanesRoutingModule,
    CountdownComponentModule
  ],
  declarations: [PlanesPage]
})
export class PlanesPageModule {}