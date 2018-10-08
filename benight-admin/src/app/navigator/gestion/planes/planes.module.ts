import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { PlanesPage } from './planes.page'
import { PlanesRoutingModule } from './planes-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    PlanesRoutingModule
  ],
  declarations: [PlanesPage]
})
export class PlanesPageModule {}