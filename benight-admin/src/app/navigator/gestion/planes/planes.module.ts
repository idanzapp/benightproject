import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { PlanesPage } from './planes.page'
import { PlanesRoutingModule } from './planes-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    PlanesRoutingModule
  ],
  declarations: [PlanesPage]
})
export class PlanesPageModule {}